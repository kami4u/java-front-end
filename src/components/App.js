import React, {Component} from 'react';
import Drone from './Drone';
import AddDrone from './AddDrone';
import getDrone from './GetDrone';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>  
            <Route exact path='/cars' component={Drone}/>
            {/* <Redirect exact from='/' to='/'/> */}
             <Route path='/drone/add' component={AddDrone}/> 
            <Route path='/drone/:id' component={getDrone}/>
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

const NoMatch = ({location}) => (
  <div>
    <h3>Error 404 this <code>{location.pathname}</code> not found!</h3>
  </div>
);

export default App;