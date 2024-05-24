import { Link } from "react-router-dom"
import "./Navbar.scss"
function Navbar() {
  return (
    
    <>
    <nav>
       <ul className="general">
           <span className="span1">Selling <span className="span2">.</span> </span>
           <Link className="link" to={"/"}>Home</Link>
           <Link className="link" to={"/Add"}>Add</Link>
           <Link className="link" to={"/Admin"}>Admin</Link>
           <Link className="link" to={"/Basket"}>Basket</Link>
       </ul>
    </nav>
    </>
  )
}

export default Navbar