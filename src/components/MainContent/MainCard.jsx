import React from 'react'
import styles from "./Main.module.css"

function MainCard({img, price, name}) {
  return (
    <div className={styles.card}>
        <div className={styles.image}>
        <img src={img} alt="photo" />
        </div>
        <div className={styles.price}>
            {price}
        </div>
        <div className={styles.name}>
            {name}
        </div>
        <button className={styles.button}>КУПИТЬ</button>
    </div>
  )
}

export default MainCard