import React from 'react';
import styles from './Footer.module.css'
import { ReactComponent as Logo } from '../Assets/logo-footer.svg'

const Footer = () => {
  return <footer className={styles.footer}>
    <Logo className={styles.logo}/>
    <p>Alguns direitos reservados.</p>
  </footer>;
};

export default Footer;
