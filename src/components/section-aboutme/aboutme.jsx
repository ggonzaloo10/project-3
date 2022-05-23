import React, { useState } from "react";
import './style-aboutme.css';
import image from '../img/foto-carnet.jpg';

export default function AboutMe() {
    const [stateMenu, setStateMenu] = useState(true);

    const onOff = () => {
        // setStateCar(!stateCar);
        setStateMenu(prevValue => !prevValue);
    };

    return <section id='aboutMe'>
        <div className='aboutMe-title'>
            <h1 className='h1'>Gonzalo Soriano</h1>
            <h2 className='h2'>Designer and Web developer</h2>
        </div>

        <button onClick={onOff} className={stateMenu ? "button" : "invisible"}>About me</button>

        <div className={stateMenu ? "invisible" : "aboutMe-content"}>
            <div onClick={onOff} className="menu-icon">
                <svg className="visible" width="20" height="20" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1.93934" y1="35.8805" x2="35.8805" y2="1.93938" stroke="#CDC392" stroke-width="3" />
                    <line x1="4.06066" y1="1.93934" x2="38.0018" y2="35.8805" stroke="#CDC392" stroke-width="3" />
                </svg>
            </div>
            <div className="aboutMe-content_item">
                <h3 className='aboutMe-h3'>Ready for new challenges.</h3>
                <h4 className='aboutMe-h4'>Industrial designer and frontend developer</h4>
            </div>
            <img src={image} class="aboutMe-pic" alt="Gonzalo Soriano profile pic" />
            <p className='aboutMe-text'>I would like to put into practice my knowledge about Web & UX design and
                be part of a multicultural team in order to develop myself professional and personally.
            </p>
            <ul className="aboutMe-text">
                <li>- Availability for travelling. </li>
                <li>- Availability to work on remote. </li>
            </ul>
            <ul className="aboutMe-text">
                <h4 className='aboutMe-h4'>Soft skills:</h4>
                <li>- Assertive. </li>
                <li>- Commitment. </li>
                <li>- Team player. </li>
                <li>- Creativity. </li>
                <li>- Growth and continuous learning. </li>
            </ul>
        </div>

    </section>;
}