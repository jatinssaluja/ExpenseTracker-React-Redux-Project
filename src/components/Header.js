import React from 'react';
import {Link} from 'react-router-dom';



const Header = ()=>(

   <header className="header">
     
	     <Link to="/" className="header__title">
	     <h1> Expense Tracker </h1>
	     </Link>

     </header>

);

export default Header;