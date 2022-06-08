import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/header';
import { ProjectDetails } from './components/project/projects-components/ProjectDetails';
import AboutMe from './components/section-aboutme/AboutMe';
import Home from './pages/Home';

function App() {
  return <div className="App">
      <Header />
      <Routes>
       <Route path="/" element={<Home/>}></Route>
       {/* <Route path="/" element={<GridProjects/>}></Route> */}
      <Route path="/projects/:id" element={<ProjectDetails/>}></Route>
      <Route path="/about-me" element={<AboutMe/>}></Route>
      <Route path='*' element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />
    </div >

}

    
export default App;
