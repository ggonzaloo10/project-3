import styles from "./AboutMe.module.css";
import image from '../img/foto-carnet.jpg';
import { Link } from "react-router-dom";

export default function AboutMe() {


    return <section id='aboutMe'>

        <div className={styles.aboutMe_title}>
            <h1>Gonzalo Soriano</h1>
            <h2 className={styles.h2_typewrite_effect_disable}>Ready for <strong>NEW</strong> challenges!!</h2>
        </div>



        <div className={styles.aboutMe_content}>

            <div className={styles.aboutMe_content_item}>

        
                    <h4 className={styles.aboutMe_h4} >Hi! I’m Gonzalo, Industrial designer and Web developer.</h4>


                    <img src={image} class={styles.aboutMe_pic} alt="Gonzalo Soriano profile pic" />

            </div>

            <div className={styles.aboutMe_content_item_text}>
                <p>I would like to put into practice my knowledge about Web & UX design and
                    be part of a multicultural team in order to develop myself professional and personally.
                </p>
                <ul>
                    <li>- Availability for travelling. </li>
                    <li>- Availability to work on remote. </li>
                    <li>- Assertive. </li>
                    <li>- Commitment. </li>
                    <li>- Team player. </li>
                    <li>- Creativity. </li>
                    <li>- Growth and continuous learning. </li>
                </ul>
            </div>

        </div>

        <a href="./cv_GonzaloSoriano_ing.pdf" target="_blank"><button className='button'>Curriculum Vitae.pdf</button></a>
        <h2 className={styles.h2_typewrite_effect_disable+" "+styles.margin64}>If you want to see more <strong>MORE</strong> check out my last projects!</h2>
        <Link to={"/projects"}><button className='button'>Projects</button></Link>
    </section >;
}