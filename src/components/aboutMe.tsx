import React from 'react';
import styles from './aboutMe.module.scss';
import Animation from './animation/animation';


type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <body>
    <div className={styles.container}>
       <h1>Hello!</h1>
      <p>Welcome to my portfolio page. My name is Valentyn Zakhozhyi</p>
      <div className={styles.container}>
    <div  className={styles.layer1}></div>
    <div  className={styles.layer2}></div>
    <div  className={styles.layer3}></div>
    <div  className={styles.layer4}></div>
    <div  className={styles.layer5}></div>
    <div  className={styles.layer6}></div> 
     <div></div><Animation /></div> 
   
    </div>
    
    </body>
  )
}

export default AboutMe
