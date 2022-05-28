import React, { useEffect } from 'react';
import './style-gridProjects.css';
import { useState } from "react";
import projects from './projects.json';
import ProjectCard from '../projectCard/ProjectCard';

export default function GridProjects() {

    //PARA QUE FUNCIONE LA LANDING CON HOME, TIENE QUE ESTAR ESTA LINEA DE USESTATE
    const [projects, setProjects] = useState([]);


    // const projects = [
    //     { title: 'Personal Web', subtitle: 'Made with HTML and CSS' },
    //     { title: 'Saetabis Summer School', subtitle: 'Full developed, focusing on UX/UI' },
    //     { title: 'Wod Maker', subtitle: 'Full developed, focusing on Front End.' },
    // ];



  

return (
    <div>
        {projects.map((project) => (
            <ProjectCard key={project.id} title={project.title}
                subtitle={project.subtitle} />
        ))}

    </div>
);
}

