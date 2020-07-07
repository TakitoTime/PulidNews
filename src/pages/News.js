import React, {Component} from 'react'
import {BarraNavegacion} from '../components/BarraNavegacion'
import {ImageHeader} from '../components/ImageHeader'
import {NavBarSecciones} from '../components/NavBarSecciones'
import {Noticias} from '../components/Noticias'
import { Paginacion } from '../components/Paginacion'
import { Footer } from '../components/Footer'


import styles from '../css/news.module.css'


export class News extends Component{

    render(){
        return (
            <div className={styles.body}>
                <BarraNavegacion/>
                <ImageHeader/>
                <NavBarSecciones/>
                <Noticias/>
                <Paginacion/>
                <Footer/>
            </div>
        )
    }
}