import React from "react";
import styles from "./Intro.module.css";
import { useParams } from "react-router-dom";
import { getProject } from "../../../projects";

export default function Intro() {
    const params = useParams();
    const proje = getProject(params.id);

    return   <div className={styles.container_intro}> 
    

        <h1 style={{ textAlign: `center`}}>Introduction:</h1>
        

            <p className={styles.intro_p}>{proje.introduction}</p>
           
        
    </div>
}