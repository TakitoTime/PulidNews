import React, {Component} from 'react'
import {RecomendacionesNoticiasCard} from '../components/RecomendacionesNoticasCard'

import styles from '../css/recomendaciones.module.css'

export class Recomendaciones extends Component{
    render(){
        return(
            <div className={styles.recomendaciones}>
                <div className={styles.titulo}>
                    <h2 className='title is-4' style={{color:'white'}}>Tambien te pueden interesar</h2>
                </div>
                <RecomendacionesNoticiasCard/>
                <RecomendacionesNoticiasCard/>
                <RecomendacionesNoticiasCard/>
                <div className={styles.masnoticias}>
                    <a href='#' className={styles.boton}>Ver Mas Noticias</a>
                </div>
            </div>
        )
    }
}