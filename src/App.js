import './App.css';
import Footer from './components/footer/footer';
import GridProjects from './components/GridProjects/gridProjects';
import Header from './components/header/header';
import AboutMe from './components/section-aboutme/aboutme';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <div className='grid-projects'>

        <button className='button'>Projects</button>

        <div className="projects-container">
          <GridProjects />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
