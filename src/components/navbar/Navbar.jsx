import "./navbar.css"
import {Link} from "react-router-dom"
import navlogo from '../../image/Agency Logo.jpg'
const Navbar = () => {

 

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
          <img src={navlogo} alt="ADVICE MY HOLIDAY"  className="nav_logo"/>
        </Link>
      
      
        <div className="navoptions">
          <Link to="/aboutus" style={{color:"inherit",textDecoration:"none"}}>
            <span>About us</span>
          </Link>
          <Link to="/contact" style={{color:"inherit",textDecoration:"none"}}>
            <span>Contact</span>
          </Link>
        </div>
          
      </div>
    </div>
  )
}

export default Navbar

