import {Navigate, Outlet} from 'react-router-dom'
import {useAuth} from '../../contexts/AuthContext'

const ProtectedRoute: React.FC =() => {
    const {user} = useAuth()
    return (
        user ? <Outlet /> : <Navigate to="/login"  
        state={{message: "You must log in to view this page",
        from: location.pathname}}  replace />
    )
}

export default ProtectedRoute