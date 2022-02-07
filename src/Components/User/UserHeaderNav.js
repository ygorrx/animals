import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import {ReactComponent as MinhasFotos} from '../../Assets/feed.svg'
import {ReactComponent as Estatisticas} from '../../Assets/stats.svg'
import {ReactComponent as Adicionar} from '../../Assets/postar.svg'
import {ReactComponent as Sair} from '../../Assets/sair.svg'
import styles from './UserHeaderNav.module.css'
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {

const {userLogout} = React.useContext(UserContext);

const mobile = useMedia('(max-width: 40rem)');
const [mobileMenu, setMobileMenu] = React.useState(false);

const {pathname} = useLocation();

React.useEffect(() => {
  setMobileMenu(false);
}, [pathname]);


  return (
  <>
    {mobile && (
      <button aria-label="Menu" className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} onClick={() => setMobileMenu(!mobileMenu)}></button>
    )}
    <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
      <NavLink to="/conta" end activeClassName={styles.active}><MinhasFotos className={styles.icon}/> {mobile &&'Minhas Fotos'}</NavLink>
      <NavLink to="/conta/estatisticas" activeClassName={styles.active}><Estatisticas className={styles.icon}/>{mobile &&'Estatísticas'}</NavLink>
      <NavLink to="/conta/postar" activeClassName={styles.active}><Adicionar className={styles.icon}/>{mobile &&'Adicionar Foto'}</NavLink>
      <button onClick={userLogout}><Sair className={styles.icon}/>{mobile &&'Sair'}</button>
  </nav>
  </>
  );
};

export default UserHeaderNav;
