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
  const { loading, userInfo, isLoggedIn } = useSelector((state) => state.auth);
  const all = useSelector((state) => state.auth);
  const [getData, setGetData] = useState(isLoggedIn || false);

  const userId = getUserDataS()?.userId
 
  // const { data, isLoading, error,isError,status } = useGetUserProfileQuery({userId},{skip:!userId}); // Use the generated hook
  const IsAuthenticated = useSelector(selectIsAuthenticated); // Add isLoading from Redux store
  const loadingNAhs = useSelector(selectLoading); // Add isLoading from Redux store

  const { data, isLoading, error, status} = useGetUserProfileQuery(); // Use the generated hook
  // console.log("datadata", data)
  const { data: dataStatus, isLoading: statusLoader } = useCheckStatusQuery(); // Use the generated hook
  // console.log("data status", dataStatus)

  // useEffect(() => {
  //   if(isLoading || statusLoader) {
  //     return;
  //   }

  //   if (dataStatus?.status&&dataStatus?.status!=="active") {
  //     // alert('seen')
  //     router.push('/pricing');
  //     toast.error('Please buy a plan')
  //     // toast.error('')
  //     dispatch(logoutUser());
  //   }
  // }, [dispatch, dataStatus?.status]);

  useEffect(() => {
    if(isLoading || statusLoader) {
      return;
    }

    if (data) {
      if (!dataStatus) {
        toast.error('Please buy a plan')
        router.push('/pricing');
        dispatch(logoutUser());
      }
    }
  }, [data, dataStatus])

  // useEffect(() => {
  //   if (!data) {
  //     if (!dataStatus) {
  //       toast.error('Please buy a plan')
  //       router.push('/pricing');
  //       dispatch(logoutUser());
  //     }
  //   }
  // }, [data, dataStatus])

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
