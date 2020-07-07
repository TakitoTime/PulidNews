import React, {Component} from 'react'
import {BarraNavegacion} from '../components/BarraNavegacion'
import { Noticia } from '../components/Noticia'
import {MasVistos} from '../components/MasVistos'
import {Footer} from '../components/Footer'


import styles from '../css/new.module.css'


export class New extends Component{
    render(){
        return (
            <div>
                <BarraNavegacion/>
                <div className={styles.contenedor}>
                    <Noticia/>
                    <MasVistos/>
                </div>
                <Footer/>
            </div>
        )
    }
}