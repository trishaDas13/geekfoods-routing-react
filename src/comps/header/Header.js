import './Header.css';
import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";
import Responsive from './Responsive';

function Navbar(){
    return(
       <>
             <nav>
            <div className="logo">
                <img src={logo} alt="logo" />
                <h2>GeekFoods</h2>
            </div>
            <div className="menus">
                <ul>
                    <li><Link to ='/'>Home</Link></li>
                    <li><Link to='/quotes'>Quote</Link></li>
                    <li><Link to='/restaurants'>Restaurants</Link></li>
                    <li><Link to='/foods'>Foods</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
            <button>Get Started</button>
        </nav>
        <Responsive/>
       </>
    );
}

export default Navbar;