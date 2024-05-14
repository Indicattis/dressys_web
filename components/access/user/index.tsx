import { useUserToken } from "@/data/hooks/useSession";
import UserProfile from "./user-profile";
import UserOptions from "./user-options";





export default function UserComponent() {
    const { UserLoged, UserMail, UserName, UserPhone, UserID } = useUserToken();
    return (
        <section className="flex flex-col items-center gap-3 w-full">
            <UserProfile client_name={UserName} client_mail={UserMail} online={UserLoged}/>
            <UserOptions/>
        </section>
    )
}