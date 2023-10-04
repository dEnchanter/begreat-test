import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteAuthTokenMaster, getAuthToken, getToken } from "../helper";
import { loginTest, logout, setCredentials } from "../store/auth";
import { logoutUser, selectIsAuthenticated, selectLoading } from "../store/auth/authAction";
import { getUserDataS } from "../helper";
import { useCheckStatusQuery, useGetUserProfileQuery } from "../store/auth/authApi";
import { toast } from "react-hot-toast";

export const ProtectedRoute = ({ children, type }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [getData, setGetData] = useState(isLoggedIn || false);
  
  const IsAuthenticated = useSelector(selectIsAuthenticated); 
  const { data, isLoading, error, status} = useGetUserProfileQuery();
  const { data: dataStatus, isLoading: statusLoader } = useCheckStatusQuery();

  const [initialLoadingDone, setInitialLoadingDone] = useState(false);

  useEffect(() => {
    // This will make sure that the loader is displayed for at least 3 seconds
    const timer = setTimeout(() => {
      setInitialLoadingDone(true);
    }, 10000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  useEffect(() => {
    if(isLoading || statusLoader) {
      return;
    }

    if(dataStatus && dataStatus?.status!=="active") {
      router.push('https://app.begreat.finance/pricing');
      toast.error('Please buy a plan')
      dispatch(logoutUser());
    }
  });

  useEffect(() => {
    setGetData(true)
    if(!getToken()){
      setGetData(false)
      dispatch(logoutUser());
      router.push("https://app.begreat.finance");
    }

    if(status==="rejected"&&!data?.userRecord?.email){
      dispatch(logoutUser());
      router.push("https://app.begreat.finance");
    }
    
    if (error?.status === 401) {
      dispatch(logoutUser());
      setGetData(false)
      localStorage.clear()
    }
  }, [router, isLoggedIn, getToken(), IsAuthenticated]);

  return (getData && initialLoadingDone) ? (
    children
  ) : (
    <div className="min-h-screen flex items-center bg-black">
      <div className="mx-auto">
        <div className="loading-home"></div>
      </div>
    </div>
  );
};
