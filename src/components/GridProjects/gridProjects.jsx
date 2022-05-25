import React from 'react';
import './style-gridProjects.css';
import { Link } from "react-router-dom";
import projects from './projects.json';
import ProjectButton from '../projectButton/ProjectButton';

export default function GridProjects() {

    // const projects = [
    //     { title: 'Personal Web', subtitle: 'Made with HTML and CSS' },
    //     { title: 'Saetabis Summer School', subtitle: 'Full developed, focusing on UX/UI' },
    //     { title: 'Wod Maker', subtitle: 'Full developed, focusing on Front End.' },
    // ];

    return  projects.map((project) => 
        // <a href=""><div className="projects-card card-title">{project.title} <p>{project.subtitle}</p></div></a>
        <Link key={project.id} to={`/project/${project.id}`}>
            <ProjectButton  title = {project.title}
                subtitle = {project.subtitle}>
            </ProjectButton>
        </Link>);
}
