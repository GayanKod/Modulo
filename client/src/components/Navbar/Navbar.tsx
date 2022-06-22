import React, {useState}  from 'react';
import {Link} from "react-router-dom";
import { MenuItems } from './MenuItems';
import '../../styles/Navbar.scss';
import ModuloLogo from "../../assets/img/LogoModulo.png"

function Navbar(){

    const [clicked, isClicked] = useState(false);

    return(
        <header className="navbar-landing-container">
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    <Link to="/"><img src={ModuloLogo} alt="logo" className="navbar-logo-modulo"/></Link>
                </h1>
                <div className="menu-icon" onClick={()=> isClicked(!clicked)}>
                    <i className={ clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>

                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}><a className={item.cName} href={item.url} id={item.id}>
                                    {item.title} {item.title === 'Admin Panel' ? <i className="fas fa-lock" style={{color: '#fff'}}></i> : ''}
                                </a>
                            </li>
                        ) 
                    })}
                    
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;