import React from "react";


export default function ProjectButton(props) {

    
    return  <div className="projects-card card-title">
            {props.title}
            <p>{props.subtitle}</p></div>;
}