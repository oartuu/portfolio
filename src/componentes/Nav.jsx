import { Link } from "react-router-dom"
import './Nav.css'
function Nav (){
    return(
       <nav className="navBar">
        <div className="navContainer">
            <ul className="navBar_content">
                <li className="navBar_contentOption">
                    <Link to="/" >HOME</Link>
                </li>
                <li className="navBar_contentOption">
                    <Link to="/about" >ABOUT ME</Link>
                </li>
                <li className="navBar_contentOption">
                    <Link to="/skills" >SKILL-SET</Link>
                </li>
                <li className="navBar_contentOption">
                    <Link className="optionText" to="/projects" >PROJECTS</Link>
                </li>
            </ul>
        </div>
       </nav>
    )
}
export default Nav 