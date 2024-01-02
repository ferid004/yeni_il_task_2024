import { Navigate, Outlet } from "react-router-dom"

function PrivateRouter() {
    const token = true
    return (
            token ? <Outlet></Outlet>: <Navigate to={"/"}></Navigate>
    )
}

export default PrivateRouter