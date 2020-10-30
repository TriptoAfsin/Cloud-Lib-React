import React, {useState, useEffect} from 'react'
import  {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import {AiFillCloud} from 'react-icons/ai'
import './Navbar.css'



function Navbar() {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    //function for closing the mobile menu
    const closeMobileMenu = () => {
        setClick(false)
    }

    //function for mobile menu to appear 
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }
        else{
            setButton(true)
        }
    }

    //to update properly
    useEffect(
        () => {
            showButton()
        }, []
    )

    window.addEventListener('resize', showButton) //eventlistener to respond when window resizes


    //function for clickhandeling
    const handleClick = () => {
        setClick(!click)
    }



    return (
        <React.Fragment>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link className="navbar-logo" to='/'>
                        <AiFillCloud className="navbar-icon"></AiFillCloud>
                        Cloud Lib
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes className="hamBurger"></FaTimes> : <FaBars className="hamBurger"></FaBars>}
                    </div>
                            <ul className={click ? 'nav-menu active': 'nav-menu'}>
                                <li className="nav-item">
                                    <Link className="nav-links" to="/" onClick={closeMobileMenu}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-links" to="/Cloud-Lib-React/browse-books" onClick={closeMobileMenu}>Browse Books</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-links" to="/Cloud-Lib-React/books-suggestor" onClick={closeMobileMenu}>Books Suggestor</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-links" to="/Cloud-Lib-React/apps" onClick={closeMobileMenu}>Web apps</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-links" to="/Cloud-Lib-React/submit" onClick={closeMobileMenu}>Submit Books</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-links" to="/Cloud-Lib-React/request" onClick={closeMobileMenu}>Request Books</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-links" to="/Cloud-Lib-React/team" onClick={closeMobileMenu}>Team</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-links" to="/Cloud-Lib-React/help" onClick={closeMobileMenu}>Help</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-links" href="http://www.facebook.com/sharer.php?u=https://triptoafsin.github.io/Cloud-Lib-React/" target="blank">Share</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-links" to="/Cloud-Lib-React/about" onClick={closeMobileMenu}>About</Link>
                                </li>
                                
                            </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar
