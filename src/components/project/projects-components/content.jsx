import React from "react";
import styles from "./Content.module.css";
import { useParams } from "react-router-dom";
import { getProject } from "../../../projects";

export default function Content() {
    const params = useParams();
    const proje = getProject(params.id);

    return <div className={styles.content}>
        <div className={styles.content_item}>
            <h3 style={{ textAlign: `center` }}>Analysis & Preparation</h3>
            <p>{proje.analysis}</p>

        </div>
        <img src={proje.wireframespic} alt="" srcset="" />
        <div className={styles.content_item}>
            <h3 style={{ textAlign: `center` }}>{proje.titletext1}</h3>
            <img src={proje.img1text1} alt="" />
            <img src={proje.img2text1} alt="" />
        </div>
        <div className={styles.content_item}>
            <h3 style={{ textAlign: `center` }}>{proje.titletext2}</h3>
            <img src={proje.img1text2} alt="" />
        </div>
        <div className={styles.content_item}>
            <h3 style={{ textAlign: `center` }}>{proje.titletext3}</h3>
            <div className={styles.content_item}>
            <img src={proje.img1text3} alt="" />
            </div>
            <div className={styles.content_item}>
            <img src={proje.img2text3} alt="" />
            </div>
        </div>
    
    </div >
}