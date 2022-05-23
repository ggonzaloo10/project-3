import React from "react";
import './style-cover.css';
import project from "../project";

export default function Cover() {

    return <div>
        <div className="cover">
            <h1>{project.title}</h1>
            <button><a href="">Visit Website</a></button>
        </div>
        <div className="note-cover">
            <h2>{project.role}</h2>
            <h2>{project.period}</h2>
        </div>
    </div>
}