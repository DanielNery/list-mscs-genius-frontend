import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import './Header.css';



const Header = () => {
    return (
        <header className="col text-center p-5">
            <h1>
                <FontAwesomeIcon className="header_icon" icon={faMusic} /> 
                List Music With  <a href="https://genius.com" target="_blank" rel="noreferrer" >Genius</a>
            </h1>
            
        </header>
    )
}

export default Header;

