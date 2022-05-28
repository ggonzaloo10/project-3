import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/header';
import { ProjectDetails } from './components/project/projects-components/ProjectDetails';
import Home from './pages/Home';

function App() {
  return <div className="App">
      <Header />
      <Routes>
       <Route path="/" element={<Home/>}></Route>
       {/* <Route path="/" element={<GridProjects/>}></Route> */}
      <Route path="/projects/:id" element={<ProjectDetails/>}></Route>
      </Routes>

      {/* <div id='projects' className='grid-projects'>

        <button className='button'>Projects</button>

        <div className="projects-container">
        

        </div>
      </div> */}
      <Footer />
    </div >

}

    
export default App;
