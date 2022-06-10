import React, { useState } from "react";
import { Link } from "react-router-dom";
import './style-header.css';

export default function Header() {

    const [stateMenu, setStateMenu] = useState(false);

    const onOff = () => {
        // setStateCar(!stateCar);
        setStateMenu(prevValue => !prevValue);
    };

    return <header>

        <div onClick={onOff} className="menu-icon">
        { stateMenu ?  
            <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1.93934" y1="35.8805" x2="35.8805" y2="1.93938" stroke="#CDC392" stroke-width="3" />
                <line x1="4.06066" y1="1.93934" x2="38.0018" y2="35.8805" stroke="#CDC392" stroke-width="3" />
            </svg> : 
            <svg width="48" height="31" viewBox="0 0 48 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1.5" x2="48" y2="1.5" stroke="#CDC392" stroke-width="3" />
            <line x1="16" y1="15.5" x2="48" y2="15.5" stroke="#CDC392" stroke-width="3" />
            <line x1="28" y1="29.5" x2="48" y2="29.5" stroke="#CDC392" stroke-width="3" />
        </svg> 
        }
        </div>
        {stateMenu && <div className="menu-links">
            <Link to={"/home"}>Home</Link>
            <Link to={"/about-me"}>About me</Link>
            <Link to={"/projects"}>Projects</Link>
            <a href="#contact">Contact</a>
        </div>}
    </header>;
}