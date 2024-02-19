import CategoryItem from "../category-item/item";





export default function Showcase() {
    return (
        <div className="flex flex-col gap-3">
            <div className="w-full border-b border-pink text-center px-3 font-hunters text-6xl text-pink">Catalogo</div>
            <div className="grid grid-cols-3 gap-3">
            <CategoryItem price={25} title="Manicure"></CategoryItem>
            <CategoryItem price={65} title="Pedicure"></CategoryItem>
            <CategoryItem price={30} title="Podologa"></CategoryItem>
            <CategoryItem price={40} title="Massoterapia"></CategoryItem>
            <CategoryItem price={50} title="Depilação"></CategoryItem>
            </div>
        </div>
    )
}