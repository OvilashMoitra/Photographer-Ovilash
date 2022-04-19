import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from '../SideBarData';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { useAuthState } from 'react-firebase-hooks/auth';
import authenication from '../../firebase/firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup, faSignOut } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [user] = useAuthState(authenication)
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    const logout = () => {
        signOut(authenication);
    };

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <div className='d-flex mx-auto'><h3 className='text-white'><strong>Photographer-Ovilash</strong></h3></div>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                        {
                            user ? <FontAwesomeIcon onClick={logout} style={{ width: '18px', marginLeft: "15px", cursor: 'pointer', borderRadius: '50%', background: 'white', height: "2em", paddingRight: "1em" }} className='nav-text text-danger' icon={faSignOut}></FontAwesomeIcon> : <Link style={{ color: 'white', textDecoration: "none", marginLeft: "15px" }} className='nav-text' to={'/login'}><FontAwesomeIcon icon={faPeopleGroup} style={{ color: 'white' }}></FontAwesomeIcon>Login </Link>
                        }
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;