import React from "react";
import styles from "./Cover.module.css";
import { useParams } from "react-router-dom";
import { getProject } from "../../../projects";

export default function Cover() {
    const params = useParams();
    const proje = getProject(params.id);

    return   <div className={styles.container}> 
    <div style={{ backgroundImage: `url(${proje.imagecover})`, backgroundPosition: 'center', backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}} className={styles.cover} >

        <h1 style={{ textAlign: `center`}}>{proje.title}</h1>
        <a href={proje.url} target="_blank" rel="noreferrer"><button className="button button--lightbg">Visit Website</button></a>
        </div>

        <div className={styles.note_cover}>
            <p>{proje.subtitle}</p>
            <p>{proje.period}</p>
        </div>

    </div>
}