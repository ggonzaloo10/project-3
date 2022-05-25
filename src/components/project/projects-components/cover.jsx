import React from "react";
import './style-cover.css';

export default function Cover(props) {

    return <div>
        <div className="cover">
            <h1>{props.title}</h1>
            <button><a href="_blank">Visit Website</a></button>
        </div>
        <div className="note-cover">
            <h2>{props.role}</h2>
            <h2>{props.period}</h2>
        </div>
    </div>
}