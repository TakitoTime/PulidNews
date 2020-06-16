import React, {Component} from 'react'
import ImagePrincipal from '../img/principal.jpg'
import ImageNews from '../img/news.jpg'

import styles from '../css/imageheader.module.css'

export class ImageHeader extends Component{

    render(){
        return(
            <div className={styles.image}>
                <img classname={styles.image.img} src={ImageNews} alt='Principal'/>
            </div>
        )
    }
}