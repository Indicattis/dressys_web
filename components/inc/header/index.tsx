'use client'

import { IconBellRinging, IconSearch } from "@tabler/icons-react";

export default function Header() {
    return (
        <header className="fixed top-0 z-50 flex w-full bg-zinc-100 max-w-[1080px] text-gray">
            <nav className="flex gap-2 p-3 w-full">
                <div className="flex bg-white rounded-full w-full">
                    <input placeholder="Buscar" className="outline-none p-1 rounded-full w-full" type="text" />
                    <div className="p-1 ">
                        <IconSearch/>
                    </div>
                </div>
                <div className="p-1">
                    <IconBellRinging/>
                </div>
            </nav>
        </header>
    );
}
