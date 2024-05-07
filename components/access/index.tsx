'use client'

import { useState } from "react";

import AccessLoginComponent from "./access-login";
import AccessSignComponent from "./access-sign";
import { ToastContainer } from "react-toastify";
import LogoComponent from "@/app/components/INC/header/logo";




export default function AccessComponent() {
    const [model, setModel] = useState<number>(1)
    return (
        <section className="flex flex-col items-center gap-3  w-full">
            
            <div className="font-bold text-sm tracking-wider relative flex justify-center items-center rounded-lg h-14 w-56 overflow-hidden bg-zinc-100">
                <div className={`${model == 1 ? "text-white": "text-gray"} z-20 w-full h-14 flex items-center justify-center cursor-pointer text-center`} onClick={() => setModel(1)}>Entrar</div>
                <div className={`${model == 2 ? "text-white": "text-gray"} z-20 w-full h-14 flex items-center justify-center cursor-pointer text-center`} onClick={() => setModel(2)}>Cadastrar</div>
                <span className={`transition-all ease-in-out rounded-full absolute w-1/2 h-full bg-white shadow-2xl shadow-black  ${model == 1 ? "left-0 bg-gradient-to-tr from-[#4F7D95b1] to-blue" : "left-28 bg-gradient-to-tr from-red-400 to-pink"} rounded-sm z-10`}></span>
            </div>
            <ToastContainer theme="colored"/>
            <div className="flex flex-col w-[500px] gap-3 items-center p-5 justify-center max-md:w-full">
            
                <LogoComponent></LogoComponent>
                    {model == 1 && (
                        <AccessLoginComponent/>
                    )}
                    {model == 2 && (
                        <AccessSignComponent/>
                    )}
            </div>
        </section>
    )
}