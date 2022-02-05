import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import {ReactComponent as Animals} from '../Assets/animals-logo.svg'
import { UserContext } from '../UserContext';

const Header = () => {

  const {data, userLogout} = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Animals - Home">
          <Animals className={styles.logoAnimal}/>
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
          {data.nome}
          <button onClick={userLogout}>Sair</button> 
          </Link>
        ) : (
        <Link className={styles.login} to="/login">
          Login / Criar Login</Link>
        )}
        
      </nav>
    </header>
   );
};

export default Header;
