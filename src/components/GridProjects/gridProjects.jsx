import './style-gridProjects.css';
import { getAllProjects } from "../../projects";
import { Link } from 'react-router-dom';

export default function GridProjects() {
    
    const projects = getAllProjects();


    return (<div className='projects-container grid-projects'>

        {projects.map(project =>

            <div key={project.id} className="projects-card card-title">

                <Link to={"/projects/" + project.id} className="link-card">
                    {project.title}
                    <p>{project.subtitle}</p>
                </Link>

            </div>)}
    </div>)
}

