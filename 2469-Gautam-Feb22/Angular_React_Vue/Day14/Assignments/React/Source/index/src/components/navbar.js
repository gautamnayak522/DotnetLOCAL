import logo from '../assets/radix_logo.jpeg';
import { Link} from 'react-router-dom';
export default function NavBar(){
    return(
        <nav className="navbar navbar-expand-md navbar-light py-4 sticky-top bg-dark" aria-label="">
        <div className="container">
            <Link to="/" className="navbar-brand text-white">
                <img src={logo} alt="." width="50" height="50"></img>
                <h3 className="d-inline align-middle">RadixTraining</h3>
            </Link>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="fa fa-bars text-white" aria-hidden="true"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNav"> 
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-white">HOME</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/html" className="nav-link text-white">HTML</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/css" className="nav-link text-white">CSS</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/javascript" className="nav-link text-white">JAVASCRIPT</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}