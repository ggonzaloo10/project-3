import './style-gridProjects.css';
import {getAllProjects} from "../../projects";
import { Link } from 'react-router-dom';

export default function GridProjects() {
    const projects = getAllProjects();

    //PARA QUE FUNCIONE LA LANDING CON HOME, TIENE QUE ESTAR ESTA LINEA DE USESTATE
    // const [projects, setProjects] = useState([]);


    // const projects = [
    //     { title: 'Personal Web', subtitle: 'Made with HTML and CSS' },
    //     { title: 'Saetabis Summer School', subtitle: 'Full developed, focusing on UX/UI' },
    //     { title: 'Wod Maker', subtitle: 'Full developed, focusing on Front End.' },
    // ];





    return (<div className='projects-container grid-projects'>
        {projects.map(project => 
            <div key={project.id} className="projects-card card-title">
            <Link to={"/projects/" + project.id}>{project.title}
                <p>{project.subtitle}</p></Link>
        </div>)}
        {/* <Link to={"/projects/" + props.id}>{props.title}
<p>{props.subtitle}</p></Link> */}

    </div>
    )
}

