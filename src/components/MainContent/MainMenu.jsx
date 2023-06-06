import React from 'react'
import styles from "./Main.module.css"

function MainMenu() {
  return (
    <>
    <ul className={styles.ul}>
     <li>
        Гаджеты и аксессуары
     </li>
     <hr />
     <li>
        Бытовая техника
     </li>
     <hr />
     <li>
        Прочее
     </li>
    </ul>
    </>
  )
}

export default MainMenu