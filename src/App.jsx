import React from 'react'
import Header from './components/Header/Header'
import Main from './components/MainContent/Main'
import styles from "./App.module.css"

function App() {
  return (
    <>
    <Header/>
    <div className={styles.app}>
    <Main/>
    </div>
    </>
  )
}

export default App