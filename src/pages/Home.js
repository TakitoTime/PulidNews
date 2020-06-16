import React, {Component} from 'react'
import {BarraNavegacion} from '../components/BarraNavegacion'
import {Header} from '../components/Header'
import {UltimasNoticias} from '../components/UltimasNoticias'
import {Recomendaciones} from '../components/Recomendaciones'
import {MasVistos} from '../components/MasVistos'
import {RedesSociales} from '../components/RedesSociales'
import {Footer} from '../components/Footer'


import styles from '../css/home.module.css'


export class Home extends Component{

    render(){
        return (
            <div>
                <BarraNavegacion/>
                <Header/>
                <UltimasNoticias/>
                <div className={styles.contenedor}>
                    <Recomendaciones/>
                    <MasVistos/>
                </div>
                <RedesSociales/>
                <Footer/>
            </div>
        )
    }
}