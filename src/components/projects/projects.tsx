import React, { useEffect, useState } from 'react'
import { IRepo } from '../types/gitHubData';
import styles from "./projects.module.scss";
import Anim1 from '../anim1/anim1';




type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {

  const endpoint = "https://api.github.com/users/valentynzakhozhyi/repos";
  const [githubData, setGithubData] = useState<IRepo[]>([]);

  useEffect(() => {
    fetch(endpoint)
      .then(x => x.json())
      .then(x => setGithubData(x))
  }, [])
  return (
    <div className={styles.cont}>
      
      <div className={styles.list}>
        {
          githubData && githubData.map(x => (
            <div key={x.id} className={styles.box}>
              <h4 className={styles.title}>{x.name}</h4>
              <p className={styles.text}>{x.description}</p>
              <a href={x.html_url} target="_blanc" rel='noreferrer'><h4 className={styles.a}><a>Look it on <br></br>GitHub</a></h4></a>
              
            </div>
          ))
        }
       
      </div>
      <div className={styles.anim}><Anim1 /></div>
    </div>
  )
}
export default Projects
