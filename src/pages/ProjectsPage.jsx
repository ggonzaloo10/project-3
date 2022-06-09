import GridProjects from "../components/GridProjects/GridProjects";
import styles from "../components/section-aboutme/AboutMe.module.css";


export default function ProjectsPage() {

    return <>
        <div >
            <h1 style={{marginTop: `128px`}} className={styles.aboutMe_h1}>Projects</h1>
            
        </div>


        <GridProjects />




    </>
}