
import AccessComponent from "@/components/access";
import Header from "@/components/inc/header";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen py-20 items-center ">
        <Header/>
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
