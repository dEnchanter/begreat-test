// contexts/auth.js
// append this new bit a the end:
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteAuthTokenMaster, getAuthToken, getToken } from "../helper";
import { loginTest, logout, setCredentials } from "../store/auth";
import { useGetUserProfileQuery } from "../store/auth/authApi";



export const ProtectedRoute = ({ children, type }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, userInfo, isLoggedIn } = useSelector((state) => state.auth);
  const all = useSelector((state) => state.auth);
  const [getData, setGetData] = useState(isLoggedIn || false);
 
  const { data, isLoading, error } = useGetUserProfileQuery(); // Use the generated hook


  console.log(isLoggedIn,'isLoggedIn')
  
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
    if ( error?.status === 401) {
      router.push("/login");
      dispatch(logout());
      DeleteAuthTokenMaster('begreatFinace:accesskey') // deletes token from storage
      DeleteAuthTokenMaster('begreatFinace:user') 
      setGetData(false)
     
    }
  }, [ router,isLoggedIn,getToken()]);

  return getData ? (
    children
  ) : (
    <div>
      <div>Loading...</div>
    </div>
  );
};
