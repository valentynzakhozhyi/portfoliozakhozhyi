import React from 'react';
import styles from "./projects.module.scss"
import {Link} from "react-router-dom";

type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className={styles.cont}>
    <div >
        <ul className={styles.links}>
            <li><a href="https://github.com/valentynzakhozhyi/CalculatorPhyton">CalculatorPhyton</a></li>
            <li><a href="https://github.com/valentynzakhozhyi/Ryhm-_3_Peli">Ryhm-_3_Peli</a></li>
            <li><a href="https://github.com/valentynzakhozhyi/varia-project">varia-project</a> </li>
      
      </ul>
      </div>
    </div>
  )
}

export default Projects
