import React from 'react';
import styles from "./footer.module.scss";
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { MdOutlineAlternateEmail } from
'react-icons/md';

type FooterProps = {

}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className={styles.container}>
    <div className={styles.list}>
      <a href="https://github.com/valentynzakhozhyi" target="_blanc" rel='noreferrer'>
        
        <AiFillGithub size={32}  height="32"  width="32"fill="currentColor" color="#f0ffff"/>
      </a>
    
     <a href='https://www.linkedin.com/in/valentyn-zakhozhyi/' target="_blanc" rel='noreferrer'>
       
       <AiFillLinkedin size={32}   height="32"  width="32" color="#f0ffff" fill="currentColor"/>
     </a>
     <a href="&#109;ailto&#58;%76%61lent%&#55;&#57;%6E&#46;&#37;7Aakh&#111;zhyi&#64;%&#54;Fu%74lo&#111;%&#54;B&#46;&#99;&#37;6Fm'>v&#97;&#108;&#101;n&#116;y&#110;&#46;zak&#104;o&#122;hyi&#64;o&#117;&#116;loo&#107;&#46;com">
        
     <MdOutlineAlternateEmail size={32}  height="32"  width="32"fill="currentColor" color="#f0ffff"/>
     
      </a>
      
      
     </div>
   </div>
 
  )
}

export default Footer
