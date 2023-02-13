import { Link } from 'react-router-dom'


const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>BITbyBIT</h1>
            <div className="links">
                <Link to="/Home">Home</Link>
                <Link to="/Contact">Contact</Link>
                <a href="/">sign In</a>
                <Link to= "/Create">Sign Up</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;