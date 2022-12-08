import React from 'react';
import styles from "./navbar.module.scss";
import {Link} from "react-router-dom";

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}> 
     <div >
        <ul className={styles.links}>
            <li><Link to="/">Home </Link></li>
            <li><Link to="CV">Cv </Link></li>
            <li><Link to="Projects">Projects</Link> </li>
            
      </ul>
      </div>
    </div>
  )
}

export default Navbar