import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header/Header";
import css from './Layout.module.css';

const Layout = () => {
    
    return (
        <div className={css.box}>
            <Header/>
            <Suspense>
                <Outlet/>
            </Suspense>
        </div>
    )
}

export default Layout;