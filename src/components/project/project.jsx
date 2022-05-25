import React from 'react';
import './style-project.css';
import Cover from './projects-components/cover';
import { useParams,useState, useEffect } from 'react';
import projects from '../GridProjects/projects.json';

function Project() {
  const [project, setProject] = useState();

  const parameters = useParams();
  
  function useEffect() {

    setProject(projects.find(project => project.id === parameters.id));
  }

  return (<>
    <h1>hola</h1>
    <div className="project-page">
      <h1>{project && project.title}</h1>
      <Cover title={project.title}/>
      {/*
      <Intro/>
      <Content/>
      <FinalResult/>
      <Moreprojects/> */}
    </div>
    </>
  );
}

export default Project;
