import React from 'react'
import styles from './styles.css'

const AppBar = ({children})=>{
    return(
        <header className={styles.header}>{children}</header>
    )
}

export default AppBar