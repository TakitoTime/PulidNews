import React,{Component} from 'react'

import {NoticiasCard} from '../components/NoticiasCard'


export class Noticias extends Component{
    render(){
        return(
            <div>
                <NoticiasCard/>
                <NoticiasCard/>
                <NoticiasCard/>
                <NoticiasCard/>
            </div>
        )
    }
}