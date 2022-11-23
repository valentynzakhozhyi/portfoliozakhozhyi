import React from 'react';
import styles from "./animation.module.scss"

type AnimationProps = {

}

const Animation: React.FC<AnimationProps> = () => {
  return (
    
    <div className={styles.container}>
    
    <div className={styles.ring}></div>
    <div className={styles.ring}></div>
    <div className={styles.ring}></div>
    </div>
    
   
  )
}

export default Animation
