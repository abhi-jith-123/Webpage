import { NavLink, Outlet } from 'react-router-dom'

function IndexLayout() {
    return (
        <div className="flex-col">
            <Outlet />
            <NavLink to={"/"}>Home</NavLink>
        </div>
    )
}

export default IndexLayout