import {GoogleLogin} from 'react-google-login';

const clientId ='878894823674-980843piuru7or27d8enk1j4bm31t0r5.apps.googleusercontent.com';

export function LoginGoogle(){

    const onSuccess =(res)=>{
        console.log("LOGIN SUCCESS! Current User:",res.profileObj)
    }

    const onFailure =(res)=>{
        console.log("LOGIN FAILED! res:",res)
    }

    return (
        <div id='signInButton'>
            <GoogleLogin
            clientId={clientId}
            buttonText='Login'
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy='single_host_origin'
            isSignedIn={true}
            />
        </div>
    )
}