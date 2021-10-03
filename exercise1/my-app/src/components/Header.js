import React from 'react'
import styles from'./Header.module.css'

export default function Header() {

    const demo = { color: 'white', fontSize: '18px'};



    return (
        <div className={ styles.headerBackground }>
            <div className={ styles.container }>
            <div className={ styles.brand, styles.container3 }>HELSINGIN SANOMAT</div>
            <div> 
            Etusivu 
            Uutiset
            Lehdet
            Asiakaspalvelu
            </div>
                <div className={ styles.container2 }>
                    Tilaa
                    Kirjaudu
                    Valikko
                </div>

        </div>
    </div>
    )
}
