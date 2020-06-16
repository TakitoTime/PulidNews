import React, {Component} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export class Buscador  extends Component{
    state={
        inputNew:''
    }

    _handleChange =(e) =>{
        this.setState({inputMovie: e.target.value })
    }

    render(){
        return(
            <form>
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" onChange={this._handleChange} type="text" placeholder="Buscar..."/>
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}