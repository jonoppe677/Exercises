import React from 'react'
import styles from './SideSection.module.css'

export default function SideSection(props) {
    return (
        <div className={ styles.container }>
            <span className={ styles.header }>{ props.numero }</span> <span className={ styles.header2 }>{ props.otsikko } </span> <span className={ styles.contents }>{ props.content }</span>
        </div>
    )
}
