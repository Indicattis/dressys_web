import { IconLetterI } from "@tabler/icons-react";
import { useState } from "react";



type ProgressBarProps = {
    color: number
}



export default function ProgressBarDefault({color}: ProgressBarProps) {


    if(color == 0 || color == 4) {
        return (
            <div className="w-full h-10 relative flex">
            
            <span className="w-1/3 "> <IconLetterI color="rgb(254, 240, 244" style = {{transform: 'rotate(90deg)' }} width={60} height={60} ></IconLetterI > </span>
            <span className="w-1/3 "> <IconLetterI color="rgb(254, 240, 244" style = {{transform: 'rotate(90deg)' }} width={60} height={60} ></IconLetterI > </span>
            <span className="w-1/3 "> <IconLetterI color="rgb(254, 240, 244" style = {{transform: 'rotate(90deg)' }} width={60} height={60} ></IconLetterI > </span>
        </div>
        )
    } 
    if(color == 1) {
        return (
            <div className="w-full h-10 relative flex gap-1">
            
            <span className="w-1/3 "> <IconLetterI  color="rgb(239, 68, 68"  style = {{transform: 'rotate(90deg)' }} width={60} height={60} ></IconLetterI > </span>
            <span className="w-1/3 "> <IconLetterI color="rgb(254, 240, 244"  style = {{transform: 'rotate(90deg)' }} width={60} height={60} ></IconLetterI > </span>
            <span className="w-1/3 "> <IconLetterI color="rgb(254, 240, 244"  style = {{transform: 'rotate(90deg)' }} width={60} height={60} ></IconLetterI > </span>
        </div>
        )
    } 
    if(color == 2) {
        return (
            <div className="w-full h-10 relative flex gap-1">
            
            <span className="w-1/3 "> <IconLetterI  color="rgb(250, 204, 21"  style = {{transform: 'rotate(90deg)' }} width={60} height={60} ></IconLetterI > </span>
            <span className="w-1/3 "> <IconLetterI color="rgb(250, 204, 21"  style = {{transform: 'rotate(90deg)' }} width={60} height={60} ></IconLetterI > </span>
            <span className="w-1/3 "> <IconLetterI color="rgb(254, 240, 244"  style = {{transform: 'rotate(90deg)' }} width={60} height={60} ></IconLetterI > </span>
        </div>
        )
    } 
    if(color == 3 || color == 5) {
        return (
            <div className="w-full h-10 relative flex gap-1">
                <span className="w-1/3 "> <IconLetterI  color="rgb(34, 197, 94"  style = {{transform: 'rotate(90deg)' }} width={60} height={60} ></IconLetterI > </span>
                <span className="w-1/3 "> <IconLetterI color="rgb(34, 197, 94"  style = {{transform: 'rotate(90deg)' }} width={60} height={60} ></IconLetterI > </span>
                <span className="w-1/3 "> <IconLetterI color="rgb(34, 197, 94"  style = {{transform: 'rotate(90deg)' }} width={60} height={60} ></IconLetterI > </span>
            </div>
        )
    } 
}