import { IconLetterI } from "@tabler/icons-react";
import { useState } from "react";



type ProgressBarProps = {
    color: number
}



export default function ProgressBarDefault({color}: ProgressBarProps) {


    if(color == 0 || color == 4) {
        return (
            <div className="w-full  relative flex">
            
            <span className="w-1/3 "> <IconLetterI color="#5d5761" style = {{transform: 'rotate(90deg)' }} width={60} height={60} ></IconLetterI > </span>
            <span className="w-1/3 "> <IconLetterI color="#5d5761" style = {{transform: 'rotate(90deg)' }} width={60} height={60} ></IconLetterI > </span>
            <span className="w-1/3 "> <IconLetterI color="#5d5761" style = {{transform: 'rotate(90deg)' }} width={60} height={60} ></IconLetterI > </span>
        </div>
        )
    } 
    if(color == 1) {
        return (
            <div className="w-full  relative flex gap-1">
            
            <span className="w-1/3 "> <IconLetterI  color="#F5618B"  style = {{transform: 'rotate(90deg)' }} width={60} height={60} ></IconLetterI > </span>
            <span className="w-1/3 "> <IconLetterI color="#5d5761"  style = {{transform: 'rotate(90deg)' }} width={60} height={60} ></IconLetterI > </span>
            <span className="w-1/3 "> <IconLetterI color="#5d5761"  style = {{transform: 'rotate(90deg)' }} width={60} height={60} ></IconLetterI > </span>
        </div>
        )
    } 
    if(color == 2) {
        return (
            <div className="w-full  relative flex gap-1">
            
            <span className="w-1/3 "> <IconLetterI  color="#4F7D95"  style = {{transform: 'rotate(90deg)' }} width={60} height={60} ></IconLetterI > </span>
            <span className="w-1/3 "> <IconLetterI color="#4F7D95"  style = {{transform: 'rotate(90deg)' }} width={60} height={60} ></IconLetterI > </span>
            <span className="w-1/3 "> <IconLetterI color="#5d5761"  style = {{transform: 'rotate(90deg)' }} width={60} height={60} ></IconLetterI > </span>
        </div>
        )
    } 
    if(color == 3 || color == 5) {
        return (
            <div className="w-full  relative flex gap-1">
                <span className="w-1/3 "> <IconLetterI  color="rgb(34, 197, 94"  style = {{transform: 'rotate(90deg)' }} width={60} height={60} ></IconLetterI > </span>
                <span className="w-1/3 "> <IconLetterI color="rgb(34, 197, 94"  style = {{transform: 'rotate(90deg)' }} width={60} height={60} ></IconLetterI > </span>
                <span className="w-1/3 "> <IconLetterI color="rgb(34, 197, 94"  style = {{transform: 'rotate(90deg)' }} width={60} height={60} ></IconLetterI > </span>
            </div>
        )
    } 
}