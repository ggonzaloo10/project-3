import React from "react";
import styles from "./Content.module.css";
import { useParams } from "react-router-dom";
import { getProject } from "../../../projects";

export default function Content() {
    const params = useParams();
    const proje = getProject(params.id);

    return   <div className={styles.content}>
        <div className={styles.text_content}>
            <h3 style={{ textAlign: `center`}}>Analysis & Preparation</h3>
            <p>{proje.analysis}</p>
            
        </div>
        <img src={proje.wireframespic} alt="" srcset="" />
        <div className={styles.text_content}>
            <h3 style={{ textAlign: `center`}}>{proje.titletext1}</h3>
            <img src={proje.imgtext1} alt="" />
            <img src={proje.imgtext2} alt="" />
            </div>
    </div>
}