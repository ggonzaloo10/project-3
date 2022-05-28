import GridProjects from "../components/GridProjects/gridProjects";
import AboutMe from "../components/section-aboutme/aboutme";


export default function Home() {

    return <><AboutMe />
        <div id='projects' className='grid-projects'>

            <button className='button'>Projects</button>

            <div className="projects-container">

                <GridProjects/>
            </div>
        </div>
    </>
}