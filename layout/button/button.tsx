
interface DefaultButtonProps {
    variant: "submit" | "darkPink" | "pink" | "default" | "blue" | "darkBlue"
    type?: "submit" | "reset" | "button",
    children: React.ReactNode,
    onClick?: () => void,
    wide?: "sm" | "lg" | "md" | "xl" | "full",
    rounded?: "sm" | "lg" | "md" | "xl" | "full",
}

export default function DefaultButton({children, variant, onClick, type, wide, rounded}: DefaultButtonProps) {
    return (
        <button type={type} onClick={onClick} className={`
        _button shadow-lg shadow-gray
        transition-all text-base
        flex justify-center items-center gap-2
        ${rounded == "sm" ? "rounded-sm" : ""}
        ${rounded == "md" ? "rounded-md" : ""}
        ${rounded == "lg" ? "rounded-lg" : ""}
        ${rounded == "full" ? "rounded-full" : ""}

        ${wide == "sm" ? "_small" : ""}
        ${wide == "md" ? "_medium" : ""}
        ${wide == "lg" ? "_large" : ""}
        ${wide == "xl" ? "h-16 w-16" : ""}
        ${wide == "full" ? "_full" : ""}
        ${variant == "default" ? ` text-gray bg-text ` : ""}
        ${variant == "blue" ? ` text-blue bg-transparent border border-blue ` : ""}
        ${variant == "pink" ? ` text-white bg-gradient-to-t from-pink to-sweetPink _pink` : ""}
        ${variant == "darkPink" ? ` text-pink bg-gray border border-pink` : ""}
        ${variant == "darkBlue" ? `font-normal text-white bg-blue border border-blue` : ""}
        `}>
            {children}
        </button>
    )
}