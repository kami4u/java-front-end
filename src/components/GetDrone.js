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
        request.get(`${ROOT}/cars/${this.props.match.params.id}`)
            .then((res) => {
                this.setState({drone: res.data});
            })
            .catch((error) => {console.log(error);});
    }
    render () {
        return (<div >
            
            <h2>carMake: {this.state.drone.carMake}</h2><h2>carModel: {this.state.drone.carModel}</h2>
            <button><Link to='/'>Go Back to lists</Link></button>
        </div>);
    }
}

export default Drone;