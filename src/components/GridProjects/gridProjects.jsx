import React from 'react';
import './style-gridProjects.css';
import { Link } from "react-router-dom";
import Project from '../project/project';
import projects from './projects.json';

export default function GridProjects() {

    // const projects = [
    //     { title: 'Personal Web', subtitle: 'Made with HTML and CSS' },
    //     { title: 'Saetabis Summer School', subtitle: 'Full developed, focusing on UX/UI' },
    //     { title: 'Wod Maker', subtitle: 'Full developed, focusing on Front End.' },
    // ];

    return projects.map((project) => (
        <a href=""><div className="projects-card card-title">{project.title} <p>{project.subtitle}</p></div></a>
        // <Link to={`/project/${projects.title}`}>
        //     <Project>
        //         name={project.name}
        //         subtitle={project.subtitle}
        //     </Project>
        // </Link>
    ))
}
