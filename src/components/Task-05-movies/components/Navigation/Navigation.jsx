import { Suspense } from "react"
import { NavLink, Outlet } from "react-router-dom"
import css from "./Navigation.module.css"


export const Navigation = () => {
    return(
        <div className={css.container}>
            <header className={css.header}>
                <nav className={css.navigation}>
                    <NavLink className={css.navLink} to="/">Home</NavLink>
                    <NavLink className={css.navLink} to="/movies">Movies</NavLink>
                </nav>
               
            </header>
            <Suspense fallback={<div>Loading page ...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
}