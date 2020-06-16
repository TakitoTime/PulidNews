import React,{Component} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser} from '@fortawesome/free-solid-svg-icons'

import styles from '../css/redes_sociales.module.css'

export class RedesSociales extends Component{
    render(){
        return(
            <div className={styles.contenedor}>
                <div className={styles.redes_sociales}>
                    <a href='#' style={{color:'white'}}><FontAwesomeIcon icon={faHouseUser}  size="4x"/></a>
                    <a href='#' style={{color:'white'}}><FontAwesomeIcon icon={faHouseUser}  size="4x"/></a>
                    <a href='#' style={{color:'white'}}><FontAwesomeIcon icon={faHouseUser}  size="4x"/></a>
                    <a href='#' style={{color:'white'}}><FontAwesomeIcon icon={faHouseUser}  size="4x"/></a>
                </div>
            </div>
        )
    }
}