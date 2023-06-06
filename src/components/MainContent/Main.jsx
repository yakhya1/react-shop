import React from 'react'
import MainMenu from './MainMenu'
import styles from "./Main.module.css"
import MainCard from './MainCard'

function Main() {
  return (
    <>
    <MainMenu/>
    <div className={styles.mainCard}>
        
        <MainCard name="Iphone X" price="2000$" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXQDnAv0N-QnUuRY4J5ZGJfWvpxt4PlQBylg&usqp=CAU"/>

        <MainCard name="MacBook" price="3000$" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLartAnglDfsyJjxlae38rugSyC1BwnSSBMw&usqp=CAU"/>

        <MainCard name="Iphone 11" price="4000$" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNDH4X_x_xtKWlgp7ctDtXZlRnGi8qxei-MA&usqp=CAU"/>
        
        <MainCard name="Iphone 12" price="5000$" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdjTiw2QKw_axl4DgaL_4vFaZRgYmwUS2lxw&usqp=CAU"/>

        <MainCard name="Iphone 12PRO" price="3000$" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJuwg8xCq70OEvdDAXcYj1KAnG-ClxUm36g&usqp=CAU"/>
        
        <MainCard name="Iphone 14" price="2020$" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxwf3SCXlXcd19Dtxe1ucU_VsOxefv6zThOg&usqp=CAU"/>
    </div>
    </>
  )
}

export default Main