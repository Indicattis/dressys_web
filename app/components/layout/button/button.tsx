interface DefaultButtonProps {
    variant: "submit" | "alert" | "cancel" | "default" | "icon_green" | "icon_red",
    type?: "submit" | "reset" | "button",
    children: React.ReactNode,
    onClick?: () => void,
    wide?: "sm" | "lg" | "md"
}

export default function DefaultButton({children, variant, onClick, type, wide}: DefaultButtonProps) {
    return (
        <button type={type} onClick={onClick} className={`
        text-center rounded-sm transition-all
        ${wide == "sm" ? "px-1 h-8 text-xs" : ""}
        ${wide == "md" ? "px-2 h-9 text-sm" : ""}
        ${wide == "lg" ? "px-3 h-18 text-md" : ""}
        ${variant == "default" ? " text-red-300 hover:text-red-400 active:text-red-300" : ""}
        ${variant == "submit" ? "bg-blue text-white active:scale-95" : ""}
        `}>
            {children}
        </button>
    )
}