
interface DefaultButtonProps {
    variant: "submit" | "alert" | "pink" | "default" | "blue" | "config"
    type?: "submit" | "reset" | "button",
    children: React.ReactNode,
    onClick?: () => void,
    wide?: "sm" | "lg" | "md" | "xl" | "full",
    rounded?: "sm" | "lg" | "md" | "full",
}

export default function DefaultButton({children, variant, onClick, type, wide, rounded}: DefaultButtonProps) {
    return (
        <button type={type} onClick={onClick} className={`
        transition-all font-mono
        flex justify-center items-center gap-2
        ${rounded == "sm" ? "rounded-sm" : ""}
        ${rounded == "md" ? "rounded-md" : ""}
        ${rounded == "lg" ? "rounded-lg" : ""}
        ${rounded == "full" ? "rounded-full" : ""}

        ${wide == "sm" ? "h-10 w-10" : ""}
        ${wide == "md" ? "h-12 w-12" : ""}
        ${wide == "lg" ? "h-14 w-14" : ""}
        ${wide == "xl" ? "h-16 w-16" : ""}
        ${wide == "full" ? "h-10 w-full" : ""}
        ${variant == "default" ? ` text-gray hover:text-pink` : ""}
        ${variant == "blue" ? ` text-white bg-gradient-to-tr from-[#4F7D95b1] to-blue active:scale-95` : ""}
        ${variant == "config" ? ` text-slate-200 bg-slate-700 active:scale-95 shadow shadow-darkness` : ""}
        ${variant == "pink" ? ` text-white bg-gradient-to-tr from-red-400 to-pink active:scale-95` : ""}
        `}>
            {children}
        </button>
    )
}