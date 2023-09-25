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
import Image from "next/image";



export const ProtectedRoute = ({ children, type }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, userInfo, isLoggedIn } = useSelector((state) => state.auth);
  const all = useSelector((state) => state.auth);
  const [getData, setGetData] = useState(isLoggedIn || false);

  const userId = getUserDataS()?.userId
  // console.log("userId", userId)
 
  // const { data, isLoading, error,isError,status } = useGetUserProfileQuery({userId},{skip:!userId}); // Use the generated hook
  const IsAuthenticated = useSelector(selectIsAuthenticated); // Add isLoading from Redux store
  const loadingNAhs = useSelector(selectLoading); // Add isLoading from Redux store

  const { data, isLoading, error, refetch, isError, status} = useGetUserProfileQuery(); // Use the generated hook
  // console.log("user data", data);
  const { data:dataStatus, isLoading:statusLoader, error:errorLoader, isError:statusIsError } = useCheckStatusQuery(); // Use the generated hook
  // console.log("user subscription", dataStatus);
  
  // useEffect(() => {
  //   if(dataStatus && dataStatus?.status!=="active") {
  //     toast.error('Please buy a plan')
  //     router.push('/pricing');
  //     dispatch(logoutUser());
  //   }
  // }, [dispatch, dataStatus?.status]);

  useEffect(() => {
    if (data) {
      if (!dataStatus) {
        toast.error('Please buy a plan')
        router.push('/pricing');
        dispatch(logoutUser());
      }
    }
  }, [data, dataStatus])

  useEffect(() => {
    setGetData(true)
    if(!getToken()){
      setGetData(false)
      dispatch(logoutUser());
      router.push("/login");
      // localStorage.clear() 
    }

    if(status==="rejected"&&!data?.userRecord?.email){
      dispatch(logoutUser());
      router.push("/login");
    }
    
    if (error?.status === 401) {
      router.push("/login");
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
