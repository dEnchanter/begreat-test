// contexts/auth.js
// append this new bit a the end:
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
  // const all = useSelector((state) => state.auth);
  const [getData, setGetData] = useState(isLoggedIn || false);
  
  const IsAuthenticated = useSelector(selectIsAuthenticated); // Add isLoading from Redux store
  // const loadingNAhs = useSelector(selectLoading); // Add isLoading from Redux store

  const { data, isLoading, error, status} = useGetUserProfileQuery(); // Use the generated hook
  const { data: dataStatus, isLoading: statusLoader } = useCheckStatusQuery(); // Use the generated hook
  // console.log("data status", dataStatus)

  useEffect(() => {
    if(isLoading || statusLoader) {
      return;
    }

    if (dataStatus && dataStatus?.status!=="active") {
      router.push('/pricing');
      toast.error('Please buy a plan')
      // dispatch(logoutUser());
    }
  }, [dispatch, dataStatus]);

  useEffect(() => {
    
    if(isLoggedIn) {
      setGetData(true)
    }

    if(!getToken()){
      setGetData(false)
      dispatch(logoutUser());
      router.push("https://app.begreat.finance");
      // localStorage.clear() 
    }

    if(status==="rejected"&&!data?.userRecord?.email){
      dispatch(logoutUser());
      router.push("https://app.begreat.finance");
    }
    
    if (error?.status === 401) {
      router.push("https:app.begreat.finance");
      dispatch(logoutUser());
      setGetData(false)
      localStorage.clear()
    }
  }, [router, isLoggedIn, getToken(), IsAuthenticated]);

  return getData ? (
    children
  ) : (
    <div className="min-h-screen flex items-center bg-black">
      <div className="mx-auto">
        <div className="loading-home"></div>
      </div>
    </div>
  );
};
