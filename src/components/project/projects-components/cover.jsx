import React from "react";
import './style-cover.css';

export default function Cover({ titulo, role, date }) {

    return <div>
        <div className="cover">
            <h1>{titulo}</h1>
            <button><a href="">Visit Website</a></button>
        </div>
        <div className="note-cover">
            <h2>{role}</h2>
            <h2>{date}</h2>
        </div>
    </div>
}