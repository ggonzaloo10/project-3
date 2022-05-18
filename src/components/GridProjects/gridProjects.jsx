import React from 'react';
import './style-gridProjects.css';

export default function GridProjects() {
    return <div className='grid-projects'>

        <button className='button-aboutMe'>Projects</button>

        <div className="projects-container">
            <a href=""><div className="projects-card card-title">Personal Web <p>Made with HTML and CSS</p></div></a>
            <a href=""><div className="projects-card card-title">Saetabis Summer School <p>Full developed, focusing on UX/UI</p></div></a>
            <a href=""><div className="projects-card card-title">Wod Maker <p>Full developed, focusing on Front End.</p></div></a>
        </div>
        
    </div>;
}