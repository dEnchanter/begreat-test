import { useEffect } from "react";
import { useUserLoginGoogleAuthMutation } from "../../store/Coins/coinsApi";
import { setToken, setUserDataS } from "../../helper";
import { googleAuth } from "../../store/auth";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {FcGoogle} from "react-icons/fc"
import { useSelector } from "react-redux";
import { useRouter } from "next/router";


const GoogleButton = () => {
  const dispatch = useDispatch();
   const router = useRouter();
  const [sendToken, { isLoading, isError, error:AuthGoogleError,isSuccess }] = useUserLoginGoogleAuthMutation();
  const {loading,userInfo,isLoggedIn,error,} = useSelector((state) => state.auth)

  const handleCredentialResponse = (response) => {
  // send a POST request to /api/signinWithGoogle with the token (response.credential) in the req.body
  // console.log("Encoded JWT ID token: " + response);
  
  // setToken(response.credential)
  sendToken({token:response.credential}).unwrap() // Unwrap the response to handle success and error cases
  .then((data) => {
      setUserDataS(data?.accessToken)
      setToken(data?.accessToken?.split('Bearer ')?.join(""))
      dispatch(googleAuth(data))
      toast.success(data?.message);
      router.push('/dashboard')
      // console.log('Token sent successfully!',data,'data1');
  })
  .catch((err) => {
    console.error('Failed to send token:', err);
  });
};

  useEffect(() => {
    if(!isLoggedIn){
    const loadGoogleAccountsScript = () => {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.onload = () => {
        google.accounts.id.initialize({
          // client id should be stored in an environment variable
          client_id: "878894823674-980843piuru7or27d8enk1j4bm31t0r5.apps.googleusercontent.com",
          callback: handleCredentialResponse
        });
        google.accounts.id.renderButton(
          document.getElementById("google-btn"),
          { theme: "outline",   text: "continue_with",   } // customization attributes
        );
        google.accounts.id.prompt(); // also display the One Tap dialog
      };
      document.head.appendChild(script);
    };
    loadGoogleAccountsScript();
  }
  }, []);

  //   useEffect(() => {
  //   if (isLoggedIn) {
  //     router.push('/dashboard')
  //   }
  // }, [router, isLoggedIn])
  useEffect(() => {
    if (error) {
      // toast.error(error)
    }
  }, [error])


  return (
    <span id="google-btn"  >
      <FcGoogle size={20} /> Continue with Google
    </span>
  );
};

export default GoogleButton;
