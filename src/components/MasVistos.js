import React, {Component} from 'react'
import {MasVistosNoticiasCard} from './MasVistosNoticiasCard' 

import styles from '../css/masvistos.module.css'

export class MasVistos extends Component{
    render(){
        return(
            <div className={styles.masvistos}>
                <div className={styles.titulo}>
                    <h2 className='title is-4' style={{color:'white'}}>Mas Vistos</h2>
                </div>
                <MasVistosNoticiasCard/>
                <MasVistosNoticiasCard/>
                <MasVistosNoticiasCard/>
                <MasVistosNoticiasCard/>
                <MasVistosNoticiasCard/>
                <MasVistosNoticiasCard/>
                <MasVistosNoticiasCard/>
            </div>
        )
    }
}