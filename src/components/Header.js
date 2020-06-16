import React, {Component} from 'react'
import ImagePrincipal from '../img/principal.jpg'

import styles from '../css/header.module.css'

export class Header extends Component{

    render(){
        return(
            <div>
                <div className={styles.image}>
                    <img classname={styles.image.img} src={ImagePrincipal} alt='Principal'/>
                </div>
                <div className={styles.descripcion}>
                    <div className={styles.texto}>
                        <h2 className='title'>Descripcion</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec leo pulvinar, varius lorem quis, fringilla diam. Quisque gravida id nisi ut dapibus. Maecenas lorem enim, pretium sit amet velit at, suscipit eleifend dui. In dui ante, consequat et urna id, cursus egestas odio. Nunc non varius augue, quis luctus.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}