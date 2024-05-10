import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";




export default function AccessGoogleComponent() {
    return (
        <GoogleOAuthProvider clientId="753411784831-paf4239i5bci83ss1e4ju4akl8mdokqh.apps.googleusercontent.com"> 
            <GoogleLogin 
            useOneTap
            text="continue_with"
            theme="filled_black"
            onSuccess={() => console.log("login realizado!")}/>
        </GoogleOAuthProvider>
    )
}