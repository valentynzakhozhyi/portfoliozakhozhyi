import React from 'react';
import styles from './aboutMe.module.scss'

type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <div className={styles.container}>
      <h1>Hello!</h1>
      <p>Welcome to my portfolio page. My name is Valentyn Zakhozhyi</p>
    </div>
  )
}

export default AboutMe
