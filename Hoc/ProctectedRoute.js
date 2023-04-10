// contexts/auth.js
// append this new bit a the end:
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteAuthTokenMaster, getAuthToken, getToken } from "../helper";
import { loginTest, logout, setCredentials } from "../store/auth";
import { useGetUserProfileQuery } from "../store/User/userApi";



export const ProtectedRoute = ({ children, type }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, userInfo, isLoggedIn } = useSelector((state) => state.auth);
  const all = useSelector((state) => state.auth);
  const [getData, setGetData] = useState(isLoggedIn || false);
 

  
  // useEffect(() => {
  //   if (userProfileData?.data) {
  //     // alert('seen')
  //     dispatch(setCredentials(userProfileData?.data));
  //   }
  // }, [dispatch, isLoggedIn, isSuccess, userProfileData?.data]);

  useEffect(() => {
    setGetData(true)
    if(!getToken()){
      setGetData(false)
      dispatch(logout());
      router.push("/login");
      
    }
    // if (!isLoggedIn && error?.status === 401) {
    //   router.push("/login");
    //   setGetData(false)
    //   dispatch(logout());
    // }
  }, [dispatch, router]);

  return getData ? (
    children
  ) : (
    <div>
      <div>Loading...</div>
    </div>
  );
};
