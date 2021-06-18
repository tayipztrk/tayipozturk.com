import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillGithub } from 'react-icons/all'
import ScrollIntoView from 'react-scroll-into-view'

const Nav = () => {


    return (
        <>
        <nav className="navbar">
            <div className="container">
                <Link className="logo" to="/">Tayip<span>.</span></Link>
                <div className="nav-div">
                    <ul className="nav-ul">
                    <ScrollIntoView selector="#projects-scroll" alignToTop="true">   
                        <li>
                            <Link to="/">Projects</Link>
                        </li>
                        </ScrollIntoView>
                        <ScrollIntoView selector="#scroll-about" alignToTop="true">
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        </ScrollIntoView>
                        <ScrollIntoView selector="#scroll-contact" alignToTop="true">
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        </ScrollIntoView>
                        <li>
                            <a rel="noreferrer" target="_blank" href="https://github.com/tayipztrk"><AiFillGithub/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div id="scroll-about"></div>
        </>
    )
}

export default Nav;