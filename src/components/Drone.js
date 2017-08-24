import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import request from 'axios';
import {ROOT} from '../../config';

class Drone extends Component {
    constructor (props) {
        super(props);
        this.state = {
            list: []
        };
    }
    componentDidMount () {
        request.get(`${ROOT}/cars`)
            .then((res) => {
                console.log(res);
                this.setState({list: res.data});
            })
            .catch((error) => {console.log(error);});
    }
    render () {
        return (<div >
            {this.state.list.map((e, i) => {
                return <div key={i}>
                    <h2>Name :<Link to={`/drone/${i + 1}`}>{e.carModel}</Link></h2>
                    
                </div>;
            })}
            <button><Link to='/drone/add'>Add a car</Link></button>
        </div>);
    }
}

export default Drone;