import React from 'react';
import './style-project.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';

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
