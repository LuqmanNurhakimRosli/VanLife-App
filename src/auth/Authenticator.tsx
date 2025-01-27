import { Outlet, Navigate } from "react-router-dom"

export default function Authenticator() {
    const auth = false

    if (!auth) {
        return <Navigate to="/login" />
    }
    return (
        <Outlet />
    )
}

  