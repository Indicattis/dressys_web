import { useUserToken } from "@/data/hooks/useSession";
import UserProfile from "./user-profile";
import UserOptions from "./user-options";





export default function UserComponent() {
    const { UserLoged, UserMail, UserName, UserPhone, UserID } = useUserToken();
    return (
        <section className="flex flex-col items-center gap-3 overflow-hidden  w-full">
            <UserOptions/>
            <UserProfile id={UserID}/>
        </section>
    )
}