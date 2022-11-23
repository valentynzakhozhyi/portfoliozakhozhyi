import React from 'react';
import styles from "./animation.module.scss"

type AnimationProps = {

}

const Animation: React.FC<AnimationProps> = () => {
  return (
    
    <div className={styles.container}>
    
    <div  className={styles.layer1}></div>
    <div  className={styles.layer2}></div>
    <div  className={styles.layer3}></div>
    <div  className={styles.layer4}></div>
    <div  className={styles.layer5}></div>
    <div  className={styles.layer6}></div> 
    <div className={styles.ring}></div>
    <div className={styles.ring}></div>
    <div className={styles.ring}></div>
    </div>
    
   
  )
}

export default Animation
