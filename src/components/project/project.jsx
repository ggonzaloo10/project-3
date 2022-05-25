import React from 'react';
import './style-project.css';
import Cover from './projects-components/cover';
import { useState, useEffect } from 'react';
import projects from '../GridProjects/projects.json';
import { useParams } from 'react-router-dom';

function Project() {
  const [project, setProject] = useState([]);

  const {parameters} = useParams();


  // setProject(projects.find(project => {
  //   return project.id === parameters.id;
  //   console.log(project.id);
  // }));

  for (var i=0; i<projects.length; i++) {
    if(projects[i].id === parameters.id) {
      setProject(projects[i]);
      console.log(projects[i].id);
    }
  }


  return (<>
    <h1>hola</h1>
    <div className="project-page">
      <h1>{project && project.title}</h1>
      <Cover title={project.title} />
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
