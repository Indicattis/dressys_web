
interface DefaultButtonProps {
    variant: "submit" | "alert" | "pink" | "default" | "blue" | "config"
    type?: "submit" | "reset" | "button",
    children: React.ReactNode,
    onClick?: () => void,
    wide?: "sm" | "lg" | "md" | "xl" | "full",
    rounded?: "sm" | "lg" | "md" | "xl" | "full",
}

export default function DefaultButton({children, variant, onClick, type, wide, rounded}: DefaultButtonProps) {
    return (
        <button type={type} onClick={onClick} className={`
        _button font-bold shadow-lg shadow-gray
        transition-all 
        flex justify-center items-center gap-2
        ${rounded == "sm" ? "rounded-sm" : ""}
        ${rounded == "md" ? "rounded-md" : ""}
        ${rounded == "lg" ? "rounded-lg" : ""}
        ${rounded == "full" ? "rounded-full" : ""}

        ${wide == "sm" ? "h-10 w-10" : ""}
        ${wide == "md" ? "_medium" : ""}
        ${wide == "lg" ? "_large" : ""}
        ${wide == "xl" ? "h-16 w-16" : ""}
        ${wide == "full" ? "_full" : ""}
        ${variant == "default" ? ` text-gray bg-text ` : ""}
        ${variant == "blue" ? ` text-blue bg-transparent border border-blue ` : ""}
        ${variant == "config" ? ` text-slate-200 bg-slate-700 active:scale-95` : ""}
        ${variant == "pink" ? ` text-white bg-gradient-to-t from-pink to-sweetPink` : ""}
        `}>
            {children}
        </button>
    )
}