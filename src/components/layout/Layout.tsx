import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"

const Layout = () =>{
return (
  <div className="bg-[#141414] px-12 py-12  h-screen">
  <NavBar/>
  <Outlet/>
  </div>
)
}
export default Layout