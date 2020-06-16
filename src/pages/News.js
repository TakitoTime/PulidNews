import React, {Component} from 'react'
import {BarraNavegacion} from '../components/BarraNavegacion'
import {ImageHeader} from '../components/ImageHeader'
import {NavBarSecciones} from '../components/NavBarSecciones'
import {Noticias} from '../components/Noticias'


import styles from '../css/news.module.css'


export class News extends Component{

    render(){
        return (
            <div>
                <BarraNavegacion/>
                <ImageHeader/>
                <NavBarSecciones/>
                <Noticias/>
            </div>
        )
    }
}