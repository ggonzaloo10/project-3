import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {

    return <div className={styles.home}>

        <div className={styles.aboutMe_title}>
            <h1>Gonzalo Soriano</h1>
            <h2 className={styles.h2_typewrite_effect}>Ready for <strong>NEW</strong> challenges!!</h2>
            <Link to={"/about-me"}><button className='button'>About me</button></Link>
        </div>




        <button style={{alignSelf: `center`}} className='button'>Projects</button>



        </div>
}