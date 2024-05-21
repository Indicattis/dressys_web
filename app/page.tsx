'use client'
import FeedComponent from "@/components/home/feed";
import Header from "@/components/inc/header";
import establishment from "@/data/json/establishment";





export default function Home() {
    return (
        <main className="flex m-auto flex-col min-h-screen items-center max-w-[1080px]">
            <Header menu="Feed"/>
            <FeedComponent data={establishment}/>
        </main>
    )
}