import { useNavigate,Link } from "react-router-dom";

function Header(){
    return (
        <header>
            <h1><Link to="/">Doggiepedia</Link></h1>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/resources">Resources</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    )
}
export default Header;