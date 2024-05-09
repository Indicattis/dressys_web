'use client'

import { IconBellRinging, IconSearch } from "@tabler/icons-react";

export default function Header() {
    return (
        <header className="fixed top-0 z-50 flex w-full  max-w-[1080px] text-blue">
            <nav className="flex gap-2 p-5 w-full">
                <div className="flex bg-white rounded-sm w-full p-2 shadow-md text-sm">
                    <input placeholder="Buscar" className="outline-none w-full" type="text" />
                    <div className="_icon">
                        <IconSearch/>
                    </div>
                </div>
            </nav>
        </header>
    );
}
