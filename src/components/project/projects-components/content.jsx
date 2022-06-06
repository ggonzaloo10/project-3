import React from "react";
import styles from "./Content.module.css";
import { useParams } from "react-router-dom";
import { getProject } from "../../../projects";

export default function Content() {
    const params = useParams();
    const proje = getProject(params.id);

    return <div className={styles.content}>

        {/* ANALYSIS DIV */}
        <div className={styles.content_item}>
            <div className={styles.content_item_section}>
                <h3 style={{ textAlign: `center` }}>Analysis & Preparation</h3>
                <p>{proje.analysis}</p>
            </div>
            <div className={styles.content_item_section}>
                <h3 style={{ textAlign: `center` }}>{proje.wireframestitle}</h3>
                <img src={proje.wireframespic} alt="" srcset="" />
            </div>
        </div>

        {/* PART 1 CONTENT */}
        <div className={styles.content_item}>
            <div className={styles.content_item_section}>
                <h3 style={{ textAlign: `center` }}>{proje.titleimg1}</h3>
                <img src={proje.img1part1} alt="" />
            </div>
            <div className={styles.content_item_section}>
                <h3 style={{ textAlign: `center` }}>{proje.titleimg2}</h3>
                <img src={proje.img2part1} alt="" />
            </div>
        </div>

        {/* PART 2 CONTENT */}
        <div className={styles.content_item}>
            <div className={styles.content_item_section}>
                <h3 className={styles.content_h3} style={{ textAlign: `center`, width: `100%` }}>{proje.titletext3}</h3>
                <p>{proje.text3}</p>
            </div>

            <div className={styles.content_items__pic}>
                <img src={proje.img1text3} alt="" />

                <img src={proje.img2text3} alt="" />
            </div>

        </div>

        {/* PART 3 CONTENT */}
        <div className={styles.content_item}>
            <div className={styles.content_item_section}>
                <h3 style={{ textAlign: `center`, width: `100%` }}>{proje.titletext4}</h3>
                <img src={proje.img1text4} alt="" />
            </div>
        </div>
    </div >
}

