import React from 'react'
import styles from './MainSection.module.css'



export default function MainSection() {


    return (
        <div className={ styles.container }>
            <div><img src="/images/korona.jpg" alt=""/>
            <span className={ styles.header }> Koronavirus </span> | Tutkimus: Koronavirus tarttuu eri pintamateriaaleihin eri voimakkuudella, siivous ei välttämättä poista virusta kokonaan pinnoilta</div>

        </div>
    )
}
