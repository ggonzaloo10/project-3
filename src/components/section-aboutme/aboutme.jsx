import React from 'react';
import './style-aboutme.css';
import image from '../img/foto-carnet.jpg';

export default function AboutMe() {
    return <section>
        <div className='aboutMe-title'>
            <h1 className='h1'>Gonzalo Soriano</h1>
            <h2 className='h2'>Designer and Web developer</h2>
        </div>

        <button className='button-aboutMe'>About me</button>

        <div className='aboutMe-content'>
            <div className="aboutMe-content_item">
                <h3 className='aboutMe-h3'>Ready for new challenges.</h3>
                <h4 className='aboutMe-h4'>Industrial designer and frontend developer</h4>
            </div>
            <img src={image} class="aboutMe-pic" alt="Gonzalo Soriano profile pic" />
            <p className='aboutMe-text'>I would like to put into practice my knowledge about Web & UX design and
                be part of a multicultural team in order to develop myself professional and personally.</p>
        </div>

    </section>;
}