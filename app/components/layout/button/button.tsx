interface DefaultButtonProps {
    variant: "submit" | "alert" | "cancel" | "default" | "icon_green" | "icon_red",
    type?: "submit" | "reset" | "button",
    children: React.ReactNode,
    onClick?: () => void,
}

export default function DefaultButton({children, variant, onClick, type}: DefaultButtonProps) {
    return (
        <button type={type} onClick={onClick} className={`
        ${variant == "default" ? "rounded-full -ml-1 p-1 text-red-300 hover:text-red-400 active:bg-zinc-100" : ""}
        ${variant == "icon_green" ? "rounded-full p-1 bg-green-400 text-white active:bg-green-300 hover:bg-green-500" : ""}
        ${variant == "icon_red" ? "rounded-full p-1 bg-red-400 text-white active:bg-red-300 hover:bg-red-500" : ""}
        ${variant == "alert" ? "text-yellow-500" : ""}
        ${variant == "submit" ? "w-full text-white bg-green-400 text-base rounded-sm" : ""}
        ${variant == "cancel" ? "w-full text-white bg-red-400 text-base rounded-sm" : ""}
        `}>
            {children}
        </button>
    )
}