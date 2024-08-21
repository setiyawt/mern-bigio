import React from 'react'
import styles from './Sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBook } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
        <div>
            <img className={styles.logo} src={Logo} alt="logo" />
            <ul className={styles.menu}>
              <a href="#">
                <li><FontAwesomeIcon icon={faHouse} /> Dashboard</li>
              </a>
              <a href="#">
                <li><FontAwesomeIcon icon={faBook} /> Story Management</li>
              </a>
                
            </ul>
        </div>
        
    </aside>
  )
}

export default Sidebar
