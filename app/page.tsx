
import AccessComponent from "@/components/access";
import Header from "./components/INC/header/header";

export default function Home() {
  return (
    <main className="m-auto flex flex-col items-center gap-10 max-w-[920px]">
      <Header/>
      <AccessComponent/>
    </main>
  );
}
