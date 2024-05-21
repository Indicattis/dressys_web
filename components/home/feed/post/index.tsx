import { UNSPLASH_LINK } from "@/layout/basics";
import { IconBookmark, IconCut, IconDots, IconStar, IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";





interface PostProps {
    establishment: EstablishmentDTO
}

export default function PostComponent({establishment}: PostProps) {
    return (
        <div className="w-full ">
            <div className="p-3 flex flex-col gap-3">
                <div className="flex gap-3 justify-between">
                    <div className="rounded-full overflow-hidden min-w-9 h-9">
                        <Image width={37} height={37} alt="user" src={establishment.est_logo}></Image>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="text-sm">{establishment.est_name}</div>
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
                <div className="flex">
                    <div className="flex gap-2 w-full">
                        <div className="flex gap-1 items-center">
                            <div className="w-6 h-6">
                                <Image color="white" width={25} height={25} alt="test" src={`/icon/service-nail.png`}/>
                            </div>
                            <span>22</span>
                        </div>
                        <div className="flex gap-1">
                            <div className="w-6 h-6">
                                <Image color="white" width={25} height={25} alt="test" src={`/icon/service-ped.png`}/>
                            </div>
                            <span>13</span>
                        </div>
                        <div className="flex gap-1">
                            <div className="w-6 h-6">
                                <Image color="white" width={25} height={25} alt="test" src={`/icon/service-hair.png`}/>
                            </div>
                            <span>95</span>
                        </div>
                    </div>
                    <div>
                    <IconBookmark></IconBookmark>
                    </div>
                </div>
            </div>
        </div>
    )
}