import React,{Component} from 'react'

import {Link} from 'react-router-dom'

import imgmars from '../img/mars.jpg'

import styles from '../css/noticiascard.module.css'

export class NoticiasCard extends Component{
    render(){
        return(
            <div className={styles.card}>
                <div className={styles.image}>
                    <img className={styles.img} src={imgmars}/>
                </div>
                <div className={styles.contenido}>
                    <div className={styles.titulo}>
                        <h2 className='title is-2'>Vida en Marte</h2>
                    </div>
                    <div className={styles.fechacolaborador}>
                        <div className={styles.fecha}>
                            <p>12/06/2020</p>
                        </div>
                        <div className={styles.colaborador}>
                            <p>Publicado por <a href='#'>TakitoTime</a></p>
                        </div>
                    </div>
                    <div className={styles.resumen}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec leo pulvinar, varius lorem quis, fringilla diam. Quisque gravida id nisi ut dapibus. Maecenas lorem enim, pretium sit amet velit at, suscipit eleifend dui. In dui ante.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec leo pulvinar, varius lorem quis, fringilla diam. 
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}