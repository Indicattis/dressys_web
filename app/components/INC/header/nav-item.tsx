'use client'


import { useState } from "react"

interface ItemProps {
    icon: React.ReactNode
    title: string
}

export default function NavItem({icon, title}: ItemProps) {
    const [hover, isHovered] = useState<boolean>(false)
    return (
        <div className={`hover:text-red-300 cursor-pointer transition-all w-10 text-center relative flex justify-center`}
        onMouseOver={() => isHovered(true)}
        onMouseLeave={() => isHovered(false)}
        >
            {icon}
            {hover ? (
                <div className="absolute top-7  px-1 rounded-sm text-xs">
                    {title}
                </div>
            ) : ""}
        </div>
    )
}