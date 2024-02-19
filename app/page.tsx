import Image from "next/image";
import Header from "./components/INC/header/header";
import Showcase from "./components/contents/showcase/showcase";

export default function Home() {
  return (
    <main className=" flex flex-col items-center gap-10">
      <Header/>
      <Showcase/>
    </main>
  );
}
