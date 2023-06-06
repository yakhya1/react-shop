import React from 'react'
import HeaderIcon from './HeaderIcon'
import HeaderLogo from './HeaderLogo'
import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.header}>
    <HeaderLogo/>
    <HeaderIcon/>
    </div>
  )
}

export default Header