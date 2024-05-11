'use client'

import { useState } from "react";

import AccessLoginComponent from "./access-login";
import AccessSignComponent from "./access-sign";
import AccessGoogleComponent from "./access-google-oauth";
import AccessDivision from "./access-div";
import LogoComponent from "../inc/header/logo";



export default function AccessComponent() {
    const [model, setModel] = useState<number>(1)
    return (
        <section className="flex flex-col items-center gap-3 overflow-hidden  w-full">
            <LogoComponent color={model == 1 ? "blue" : "pink"}></LogoComponent>
            {/* <legend className="text-text w-full p-5 font-bold text-base">Entre ou cadastre-se!</legend> */}
            <div className="w-full flex justify-center">
                <div className="font-bold text-sm tracking-wider relative flex justify-center items-center h-10 w-48 overflow-hidden rounded-t-lg">
                    <div className={`${model == 1 ? "text-pink": "text-white"} z-20 w-full h-14 flex items-center justify-center cursor-pointer text-center`} onClick={() => setModel(1)}>Entrar</div>
                    <div className={`${model == 2 ? "text-pink": "text-white"} z-20 w-full h-14 flex items-center justify-center cursor-pointer text-center`} onClick={() => setModel(2)}>Cadastrar</div>
                    <span className={`transition-all ease-in-out rounded-full absolute w-1/2 top-8 h-[2px] bg-pink ${model == 1 ? "left-0 " : "left-24 "} rounded-sm z-10`}></span>
                </div>
            </div>
            <div className="flex flex-col w-[500px] gap-3 items-center p-3 justify-center max-md:w-full">
            
                {model == 1 && <AccessLoginComponent/>}
                {model == 2 && <AccessSignComponent/>}
                <AccessDivision/>
                <AccessGoogleComponent/>
            </div>
        </section>
    )
}