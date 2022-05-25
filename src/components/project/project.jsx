import React from 'react';
import './style-project.css';
import Cover from './projects-components/cover';
import { useParams,useState } from 'react';
import projects from '../GridProjects/projects.json';

function Project() {
  const [project, setProject] = useState();

  const parameters = useParams();
  
  setProject(projects.find(project => project.id === parameters.id));

  return (
    <div className="project-page">
      <h1>{project && project.title}</h1>
      <Cover project={project.title}/>
      {/*
      <Intro/>
      <Content/>
      <FinalResult/>
      <Moreprojects/> */}
    </div>
  );
}

export default Project;
