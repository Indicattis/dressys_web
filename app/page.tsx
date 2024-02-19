import Image from "next/image";
import Header from "./components/INC/header/header";
import Showcase from "./components/contents/category-showcase/showcase";

export default function Home() {
  return (
    <main className="m-auto flex flex-col items-center gap-10 max-w-[920px]">
      <Header/>
      <Showcase/>
    </main>
  );
}
