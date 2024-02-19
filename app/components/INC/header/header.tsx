import { IconAddressBook, IconButterfly, IconHome2, IconMenuDeep, IconUser } from "@tabler/icons-react";
import NavItem from "./nav-item";


export default function Header() {
    return (
        <header className=" flex p-1 items-center gap-3 w-full">
            <div className="relative">
                <h1 className={`font-hunters text-5xl`}>Dressys</h1>
                <div className="font-poppins text-xs absolute text-red-300 top-0 right-0">Moda</div>
            </div>
            <nav className="flex w-full justify-center items-center gap-10 font-poppins">
                <NavItem icon={<IconHome2/>} title="Home"/>
                <NavItem icon={<IconButterfly/>} title="Serviços"/>
                <NavItem icon={<IconAddressBook/>} title="Contato"/>
            </nav>
            <div className="p-1 text-zinc-500 border rounded-full cursor-pointer hover:text-red-300 hover:border-red-100 transition-all">
                <IconUser/>
            </div>
            <div className="p-1 text-zinc-500  rounded-sm cursor-pointer hover:text-red-300 hover:border-red-100 transition-all">
                <IconMenuDeep/>
            </div>
        </header>
    );
}
