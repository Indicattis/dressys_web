import Image from "next/image";
import DefaultButton from "../../layout/button/button";


const UNSPLASH = "https://source.unsplash.com/featured"



export default function Showcase() {
    return (
        <div className="grid grid-cols-2 ">
            <div className={`border rounded-md cursor-pointer relative overflow-hidden shadow-lg`}>
                <img className="" src={`${UNSPLASH}/300x300?nail`}/>
                <div className="absolute bottom-0 text-white p-2 z-50">
                    <legend className="text-2xl font-bold tracking-wider">Manicure</legend>
                    <div className="text-xs">A partir de</div>
                    <div>R$25</div>
                    <DefaultButton variant="default">ver mais</DefaultButton>
                </div>
                <div className="absolute bottom-0 bg-gradient-to-t from-black to-[#ffffff00] h-20 w-full"></div>
            </div>
        </div>
    )
}