'use client'

import {
    IconAddressBook,
    IconButterfly,
    IconHome2,
    IconMenuDeep,
    IconUser,
} from "@tabler/icons-react";
import NavItem from "./nav-item";
import DefaultButton from "../../layout/button/button";
import { useUserToken } from "@/data/hooks/useSession";
import LogoComponent from "./logo";

export default function Header() {
    const {UserLoged, UserName} = useUserToken();
    return (
        <header className=" flex p-1 items-center justify-between w-full">
            <LogoComponent></LogoComponent>
            <nav className="flex justify-center items-center gap-10 font-poppins">
                <NavItem icon={<IconHome2 />} title="Home" />
                <NavItem icon={<IconButterfly />} title="Serviços" />
                <NavItem icon={<IconAddressBook />} title="Contato" />
            </nav>
            <div className="flex gap-2">
                <div>
                {UserLoged ? (
                    
                    <DefaultButton wide="sm" variant="pink" rounded="full">
                    <IconUser />
                    </DefaultButton>
                
                ) : (
                    <DefaultButton wide="sm" variant="pink">
                    Login
                    </DefaultButton>
                )}
                </div>
                <DefaultButton wide="sm" variant="default" rounded="full">
                    <IconMenuDeep />
                </DefaultButton>
            </div>
        </header>
    );
}
