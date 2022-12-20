import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { Navigate, Outlet } from "react-router-dom";

export const ProtectRoutes = () => {
    const { user, wait } = useContext(UserContext);

    if (wait) {
        return null
    };

    return user ? <Outlet /> : <Navigate to="/login" />
}