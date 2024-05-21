'use client'
import FeedComponent from "@/components/home/feed";
import establishment from "@/data/json/establishment";





export default function Home() {
    return (
        <main className="flex m-auto flex-col min-h-screen items-center max-w-[1080px]">
            <FeedComponent data={establishment}/>
        </main>
    )
}