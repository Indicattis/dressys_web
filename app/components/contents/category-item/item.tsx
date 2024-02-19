'use client'

import { useState } from "react";
import DefaultButton from "../../layout/button/button"




const UNSPLASH = "https://source.unsplash.com/featured"

interface ItemProps {
    price: number;
    title: string;
}

export default function CategoryItem({ title, price }: ItemProps) {
    const [hover, isHovered] = useState<boolean>(false)
    return (
        <div className={`border rounded-md cursor-pointer relative overflow-hidden shadow-lg`}
        onMouseOver={() => isHovered(true)}
        onMouseLeave={() => isHovered(false)}
        >
                <img className={` transition-all ease-in-out ${hover ? "scale-105": ""}`} src={`${UNSPLASH}/300x300?nail`}/>
                <div className={`absolute top-0 w-full text-center transition-all ease-in-out delay-75
                ${!hover ? "-top-10" : "top-0"}`}>
                    <DefaultButton variant="submit" wide="md">clique para ver mais</DefaultButton>
                </div>
                <div className={`absolute  text-white p-2 z-50 bottom-0
                transition-all ease-in-out`}>
                    <legend className="text-2xl font-bold tracking-wider">{title}</legend>
                    <div className="text-xs">A partir de</div>
                    <div>R${price},00</div>
                    
                </div>
                <div className="absolute bottom-0 bg-gradient-to-t from-black to-[#ffffff00] h-20 w-full"></div>
            </div>
    )
}