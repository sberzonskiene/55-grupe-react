import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function PublicTemplates(){
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}