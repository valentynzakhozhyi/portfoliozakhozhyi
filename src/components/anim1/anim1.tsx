import React from 'react';
import styles from "./anim1.module.scss";

type Anim1Props = {

}

const Anim1: React.FC<Anim1Props> = () => {
  return (
  <body className={styles.body}>
    
    <div className={styles.circle}>
    <filter id="wavy">
     <feTurbulence  x="0" y="0" baseFrequency="0.009" numOctaves="5" seed="2">
      <animate attributeName='baseFrequency' dur="60s" values='0.02;0.005;0.02' repeatCount="
      indefinite" />
     </feTurbulence>
       <feDisplacementMap in="SourceGrahic" scale="30" />
     </filter>
    </div>

     
    </body>
  
    
  )
}

export default Anim1


