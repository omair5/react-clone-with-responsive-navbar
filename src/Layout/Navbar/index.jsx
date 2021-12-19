import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom'
import './navbar.css';
import NBPLOGO from '../../Assets/Images/NBPFinal.png'
import Dropdown from './Dropdown';
import { BiChevronDown } from "react-icons/bi";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';


function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const HandleDropdown = () => {
        setDropdown(!dropdown)
    }
    const handleClickAway = () => {
        setDropdown(false)
    }

    return (
        <>
            <nav className='navbar'>
                <Link to='/home' className='navbar-logo' onClick={closeMobileMenu} >
                    <img src={NBPLOGO} alt='NBP logo' title='NBP' />
                </Link>

                {/* RESPONSIVE ICONS */}
                <div className='menu-icon' onClick={handleClick} >
                    {click ? <FaTimes className={'fa-bars'} /> : <GiHamburgerMenu className={'fa-bars'} />}
                </div>

                <ul className={click ? 'nav-menu active nav-backoverlay-active' : 'nav-menu nav-backoverlay-inactive '}>

                    <li className='nav-item'>
                        <Link to='/home' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                    </li>


                    <li className='nav-item ' onClick={HandleDropdown}>
                        <ClickAwayListener onClickAway={handleClickAway}>
                            <div>
                                <div className='nav-links payment' >Payments <BiChevronDown onClick={HandleDropdown} className='carret' /></div>
                                {/* this will be shown on larger screen */}
                                <div className='show-dropdown-for-web'>
                                    {dropdown ? <Dropdown /> : null}
                                </div>
                                {/* this will be shown on small screen */}
                                <div className={'show-dropdown-for-mobile'} style={{ height: dropdown ? '40px' : 0 }}>
                                    <Link to='/' className='nav-links donate-for-mobile' onClick={closeMobileMenu}>Donate in PM Relief Fund COVID-19</Link>
                                </div>
                            </div>
                        </ClickAwayListener>
                    </li>

                    <li className='nav-item'>
                        <Link to='/aboutcovid19' className='nav-links' onClick={closeMobileMenu}>About Covid19</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contactus' className='nav-links' onClick={closeMobileMenu}>Contact Us</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/faqs' className='nav-links' onClick={closeMobileMenu}>FAQs</Link>
                    </li>

                </ul>
            </nav>
        </>
    );
}
export default Navbar;