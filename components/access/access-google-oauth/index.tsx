import { client_login_google_oauth } from "@/data/contexts/client";
import useLoading from "@/data/hooks/useLoading";
import LoadComponent from "@/layout/load";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";


interface AccessProps {
    userNotExist: (mail: string) => void;
}

export default function AccessGoogleComponent({userNotExist}: AccessProps) {
    const { loading, loadInit, loadEnd } = useLoading();

    const oAuthSuccess = async (response: any) => {
        loadInit();
        const decodedToken: any = jwtDecode(response.credential);
        console.log(decodedToken.email)
        const data = {
            client_mail: decodedToken.email
        }
        try {
            const response = await client_login_google_oauth(data);

            if (response.authenticated) {
                window.location.href = "/access/user"
            } 
        } catch (error: any) {
            console.error(error);
            toast.info("Aviso! "+ error.message);
            userNotExist(decodedToken.email)
            
        } finally {
            loadEnd();
        }
    }

    return (
        <GoogleOAuthProvider clientId="753411784831-paf4239i5bci83ss1e4ju4akl8mdokqh.apps.googleusercontent.com"> 
            {loading && <LoadComponent/>}
            <GoogleLogin 
            useOneTap
            text="continue_with"
            theme="filled_black"
            onSuccess={oAuthSuccess}/>
        </GoogleOAuthProvider>
    )
}