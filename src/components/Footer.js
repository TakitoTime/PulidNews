import React, {Component} from 'react'

import styles from '../css/footer.module.css'

export class Footer extends Component{
    render(){
        return (
            <footer className={styles.footer}>
                <div className={styles.contenedor}>
                    <a href='#'style={{color:'white'}}>Politicas De Privacidad</a>
                    <a href='#'style={{color:'white'}}>Mas Informacion</a>
                </div>
            </footer>
        )
    }
}