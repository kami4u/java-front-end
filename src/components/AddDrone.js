import React, {Component} from 'react';
import request from 'axios';
import {ROOT} from '../../config';

class AddDrone extends Component {
    constructor (props) {
        super(props);
        this.state = {
            error: ''
        };
    }
    componentDidMount () {
        request.post(`${ROOT}/cars/-1`, { 
            carMake: 'volkswagen', 
            carModel: 'golf', 
            engineSize: 2000
        }).then(() => {
            this.setState({error: 'Drone Been Added'});
        })
        .catch((error) => {
            this.setState({error: error.response.data.errors[0].defaultMessage});   
        });
    }
    render () {
        return (<div >
            <h2>{this.state.error}</h2>
        </div>);
    }
}

export default AddDrone;