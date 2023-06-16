
import { Outlet, Link } from "react-router-dom";
import "./Layout.css"
const Layout = () => {
  return (
    <>
      <nav className="header">
        <ul className="header-content">
          <li className="header-content.li">
            <Link className="header-content.li-link" to="/">Home</Link>
          </li>
          <li className="header-content.li">
            <Link  className="header-content.li-link"  to="/Login">Login</Link>
          </li>
          <li  className="header-content.li">
            <Link  className="header-content.li-link"  to="/UserList">userList</Link>
          </li>
          <li  className="header-content.li">
            <Link  className="header-content.li-link"  to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};
export default Layout;