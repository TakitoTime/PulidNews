import React,{Component} from 'react'

import {Link} from 'react-router-dom'

import styles from '../css/ultimasnoticiascard.module.css'

export class UltimasNoticiasCard extends Component{
    render(){
        return(
            <Link to={`/new/`} className={styles.card}>
                <div className="card-image">
                    <figure className="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <p className="title is-4">Titulo</p>
                        </div>
                    </div>

                    <div className="content">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris sdasdasdasdasdasd
                        <br/>
                        </p>
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                </div>
            </Link>
        )
    }
}