
import AccessComponent from "@/components/access";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <main className="flex m-auto flex-col min-h-screen items-center max-w-[1080px]">
        <br />
        <br />
        <AccessComponent/>
        <ToastContainer
        draggable 
        position="top-center"
        closeOnClick
        hideProgressBar
        theme="colored"/>
    </main>
  );
}
