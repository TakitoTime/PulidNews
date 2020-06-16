import React,{Component} from 'react'

import {UltimasNoticiasCard} from  '../components/UltimasNoticiasCard'

import styles from '../css/ultimasnoticias.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


export class UltimasNoticias extends Component{
    render(){
        return(
            <div className={styles.ultimasnoticias}>
                <div className={styles.titulo}>
                    <h1 className="title" style={{color:'white'}}>Ultimas Noticias</h1>
                </div>
                <div className={styles.contenido}>
                    <a className={styles.icon}><FontAwesomeIcon icon={faAngleLeft}  size="5x"/></a>
                    <UltimasNoticiasCard/>
                    <UltimasNoticiasCard/>
                    <a className={styles.icon}><FontAwesomeIcon icon={faAngleRight}  size="5x"/></a>
                </div>
            </div>
        )
    }
}
