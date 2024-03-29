import { Outlet } from "react-router-dom"
import RouteAccount from "./LayoutRoutes/RouteAccount"

const ProtectedRoutes = (props) => {

    const user = localStorage.getItem("token");
    return user ? <Outlet /> : <RouteAccount />
}

export default ProtectedRoutes

