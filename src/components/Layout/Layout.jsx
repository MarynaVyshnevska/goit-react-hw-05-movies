import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header/Header";

const Layout = () => {
    
    return (
        <div className="">
            <Header/>
            <Suspense>
                <Outlet/>
            </Suspense>
        </div>
    )
}

export default Layout;