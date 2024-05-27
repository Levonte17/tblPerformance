import { Link } from "react-router-dom";


function Header(props) {
  return(
    <nav>
         <Link to="/">
         <div>Trained By Lockdown Performance</div>
         </Link>
    </nav>
  )
}

export default Header;
