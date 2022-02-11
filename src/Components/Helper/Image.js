import React from 'react'
import styles from './Image.module.css'

const Image = ({alt, ...props}) => {


function handleLoading({target}){
    target.style.opacity = 1;
    
}

  return (
    <div className={styles.wrapper}>
        <div className={styles.skeleton}></div>
        <img onLoad={handleLoading} className={styles.img} alt='' src='' {...props}/>
    </div>
  )
}

export default Image