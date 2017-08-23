import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import request from 'axios';
import {ROOT} from '../../config';

class Drone extends Component {
    constructor (props) {
        super(props);
        this.state = {
            drone: {}
        };
    }
    componentDidMount () {
        request.get(`${ROOT}/drones/${this.props.match.params.id}`)
            .then((res) => {
                this.setState({drone: res.data});
            })
            .catch((error) => {console.log(error);});
    }
    render () {
        return (<div >
            <h2>Name: {this.state.drone.droneName}</h2>
            <h2>X: {this.state.drone.droneX}</h2><h2>Y: {this.state.drone.droneY}</h2>
            <button><Link to='/drones'>Go Back to lists</Link></button>
        </div>);
    }
}

export default Drone;