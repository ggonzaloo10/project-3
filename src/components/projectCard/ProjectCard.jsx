import React from "react";
import { Link } from "react-router-dom";


export default function ProjectCard(props) {


    return <div className="projects-card card-title">
        <Link to={"/projects/" + props.id}>{props.title}
        <p>{props.subtitle}</p></Link>
        
    </div>;
}