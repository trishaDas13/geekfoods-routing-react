import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

function Responsive() {
  return (
    <div className="Responsive_menus">
                <ul>
                    <li><Link to ='/'>Home</Link></li>
                    <li><Link to='/quotes'>Quote</Link></li>
                    <li><Link to='/restaurants'>Restaurants</Link></li>
                    <li><Link to='/foods'>Foods</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
  )
}

export default Responsive