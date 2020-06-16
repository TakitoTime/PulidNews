import React, {Component} from 'react'
import {Buscador} from '../components/Buscador'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'

export class BarraNavegacion extends Component{
    state={usedSearch: false, results: []}

    _handleResults = (results) => {
        this.setState({ results, usedSearch: true })
    }

    render(){
        return (
            <nav className="navbar is-dark">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <FontAwesomeIcon icon={faNewspaper}  size="lg"/>
                        <span></span>
                        <h2 className="title" style={{color:'white'}}>Pulidnews</h2>
                    </a>
                    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>

                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item" href="https://bulma.io/">
                            Inicio
                        </a>
                        <a className="navbar-item" href="https://bulma.io/">
                            Noticias
                        </a>
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <Buscador onResults={this._handleResults}/>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}