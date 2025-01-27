import { Outlet, Navigate } from "react-router-dom"

export default function Authenticator() {
    const isLoggedIn = localStorage.getItem("loggedin")

    if (!isLoggedIn) {
        return (
            <Navigate 
                to="/login" 
                state={{message: "You must log in to view this page"}} 
                
            />
        )
    }
    return (
        <Outlet />
    )
}

  