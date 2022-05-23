import React from 'react';
import './style-project.css';
import Cover from './projects-components/cover';
import Intro from './projects-components/intro';
import Content from './projects-components/content';
import FinalResult from './projects-components/finalResult';
import Moreprojects from './projects-components/moreProjects';

function ProjectPage() {
  return (
    <div className="project-page">
      <Cover/>
      <Intro/>
      <Content/>
      <FinalResult/>
      <Moreprojects/>
    </div>
  );
}

export default ProjectPage;
