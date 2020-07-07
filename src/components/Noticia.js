import React, {Component} from 'react'

import styles from '../css/noticia.module.css'

export class Noticia extends Component{
    render(){
        return (
            <div>
                <div className={styles.image}>
                    <img></img>
                </div>
                <div className={styles.title}></div>
                <div className={styles.contenedor}>
                    <div className={styles.fecha}></div>
                    <div className={styles.autor}></div>
                    <div className={styles.seccion}></div>
                </div>
                <div className={styles.noticia}>
                    <p></p>
                </div>
                <div className={styles.fuentes}>

                </div>
            </div>
        )
    }
}