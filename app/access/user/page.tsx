'use client'

import UserComponent from "@/components/access/user";
import Header from "@/components/inc/header";
import { useUserToken } from "@/data/hooks/useSession";





export default function Home() {

    return (
        <main className="flex m-auto flex-col min-h-screen items-center max-w-[1080px]">
            <Header menu="Menu"/>
            <UserComponent/>
        </main>
    );
}
