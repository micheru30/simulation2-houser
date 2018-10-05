import React, { Component } from 'react';
import House from '../House/house';
import { } from 'react-router-dom'
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            houses: [],
        }
    }
    componentDidMount(){
        axios.get(`http://localhost:4000/api/houses`).then(res => {
            this.setState({
                houses: res.data
            })
        })
    }
    componentWillReceiveProps(){}
    handleNewList(){
        axios.get(`http://localhost:4000/api/houses`).then(res => {
            this.setState({
                houses: res.data
            })
        })
    }
    handleDelete(id){
        axios.delete(`http://localhost:4000/api/houses/${id}`)
    }
render() {
    console.log(this.state.houses)
    return (
        <div>
            <div>Dashboard</div>
            {this.state.houses.map((house, i) =>(
                <House handleDelete={this.handleDelete} key={i} house={house} />
            ))}
            <Link to='/wizard'>
            <button>Add New Property</button>
            </Link>
        </div>
    )
}
}

