
import { useParams } from "react-router-dom"
import { getProject } from "../../../projects";

export function ProjectDetails() {
    const params = useParams();
    const proje = getProject(params.id);
    return (
        <div>
            <h1>{proje.title}</h1>
            <h2>{proje.subtitle}</h2>
            <h3>{proje.period}</h3>
            <h4>{proje.analysis}</h4>
            <img src={proje.image} alt="img"/>

        </div>
    )
}