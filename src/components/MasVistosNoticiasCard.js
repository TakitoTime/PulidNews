import React,{Component} from 'react'

import {Link} from 'react-router-dom'

import imgmars from '../img/mars.jpg'

import styles from '../css/masvistosnoticiascard.module.css'

export class MasVistosNoticiasCard extends Component{
    render(){
        return(
            <Link to={`/new/`} className={styles.card}>
                <div className={styles.image}>
                    <img className={styles.img} src={imgmars}/>
                </div>
                <div className={styles.contenido}>
                    <div className={styles.fecha}>
                        <p>12/06/2020</p>
                    </div>
                    <div className={styles.titulo}>
                        <h3 className='title is-5'>Vida en Marte</h3>
                    </div>
                </div>
            </Link>
        )
    }
}