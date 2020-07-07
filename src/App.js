import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'

import {Home} from './pages/Home'
import {News} from './pages/News'
import {New} from './pages/New'

import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {

  render(){ 

    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={New}/>
        </Switch>
      </div>
    );
  }
}

export default App;
