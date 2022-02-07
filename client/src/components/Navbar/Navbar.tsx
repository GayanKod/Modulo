import React, {useState}  from 'react';
import { MenuItems } from './MenuItems';
import '../../styles/Navbar.scss';

function Navbar(){

    const [clicked, isClicked] = useState(false);

    return(
        <header>
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Modulo</h1>
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