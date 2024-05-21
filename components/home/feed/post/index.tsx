import { UNSPLASH_LINK } from "@/layout/basics";
import { IconCut, IconDots, IconStar, IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";







export default function PostComponent() {
    return (
        <div className="w-full ">
            <div className="p-3 flex flex-col gap-3">
                <div className="flex gap-3 justify-between">
                    <div className="rounded-full overflow-hidden min-w-9 h-9">
                        <Image width={37} height={37} alt="user" src={`/img/user.png`}></Image>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="text-sm">Salão de beleza da Nice</div>
                        <div className="text-xs text-pink flex gap-1"><IconStarFilled width={11}/><IconStarFilled width={11}/><IconStarFilled width={11}/></div>
                    </div>
                    <div className="flex items-center"> 
                        <IconDots/>
                    </div>
                </div>
                <div>
                    <div className="rounded-lg overflow-hidden shadow-lg shadow-dark h-64 max-w-[500px]">
                        <Image width={1000} height={1000} alt="" src={UNSPLASH_LINK+`/900x900?beauty`}></Image>
                    </div>
                </div>
                <div className="text-gray">
                    <div className="flex gap-1">
                        <IconCut width={18}/>
                        <span>22</span>
                    </div>
                </div>
            </div>
        </div>
    )
}