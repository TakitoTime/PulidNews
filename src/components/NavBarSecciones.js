import React, {Component} from 'react'

import styles from '../css/navbarsecciones.module.css'


export class NavBarSecciones extends Component{

    render(){
        return (
            <div className={styles.contenedor}>
                <div className={styles.titulo}>
                    <h1 className="title" style={{color:'white'}}>Secciones</h1>
                </div>
                <nav className={styles.menu}>
                    <a className={styles.secciones} href="#">Espacio</a>
                    <a className={styles.secciones} href="#">Tecnologia</a>
                    <a className={styles.secciones} href="#">Medio Ambiente</a>
                    <a className={styles.secciones} href="#">Salud Y Medicina</a>
                    <a className={styles.secciones} href="#">Fisica</a>
                    <a className={styles.secciones} href="#">Humanos</a>
                    <a className={styles.secciones} href="#">Naturaleza</a>
                    <div className="animation start-home"></div>
                </nav>
            </div>
        )
    }
}