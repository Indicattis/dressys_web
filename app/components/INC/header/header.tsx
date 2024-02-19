import {
    IconAddressBook,
    IconButterfly,
    IconHome2,
    IconMenuDeep,
    IconUser,
} from "@tabler/icons-react";
import NavItem from "./nav-item";
import DefaultButton from "../../layout/button/button";

export default function Header() {
    return (
        <header className=" flex p-1 items-center justify-between w-full">
            <div className="relative">
                <h1 className={`font-hunters text-5xl text-blue`}>Dressys</h1>
                <div className="font-poppins text-xs absolute text-pink top-0 right-0">
                    Moda
                </div>
            </div>
            <nav className="flex justify-center items-center gap-10 font-poppins">
                <NavItem icon={<IconHome2 />} title="Home" />
                <NavItem icon={<IconButterfly />} title="Serviços" />
                <NavItem icon={<IconAddressBook />} title="Contato" />
            </nav>
            <div className="flex gap-2">
                <div>
                    <DefaultButton wide="md" variant="submit">
                        Login
                    </DefaultButton>
                </div>
                <div className="p-1 text-zinc-500 border rounded-full cursor-pointer hover:text-pink hover:border-red-100 transition-all">
                    <IconUser />
                </div>
                <div className="p-1 text-zinc-500  rounded-sm cursor-pointer hover:text-pink hover:border-red-100 transition-all">
                    <IconMenuDeep />
                </div>
            </div>
        </header>
    );
}
