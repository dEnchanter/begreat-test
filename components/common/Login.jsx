import {GoogleLogin} from 'react-google-login';

const clientId ='835111729100-862akcf0948la5pfj0892g8v55tbuva8.apps.googleusercontent.com';



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