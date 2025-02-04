// import { Outlet, Navigate, useLocation } from "react-router-dom"

// export default function Authenticator() {
//     const isLoggedIn = localStorage.getItem("loggedin")
    
//     const location = useLocation();

//     if (!isLoggedIn) {
//         return (
//             <Navigate 
//                 to="/login" 
//                 state={{message: "You must log in to view this page",
//                        from: location.pathname
//                 }} 
//                 replace
//             />
//         )
//     }
//     return (
//         <Outlet />
//     )
// }

  