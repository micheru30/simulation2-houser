import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class Wizard extends Component{
    constructor(){
        super();
        this.state={
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
        this.handleComplete = this.handleComplete.bind(this);
    }
    handleName(e){
        this.setState({
            name: e.target.value
        })
    }
    handleAddress(e){
        this.setState({
            address: e.target.value
        })
    }
    handleCity(e){
        this.setState({
            city: e.target.value
        })
    }
    handleState(e){
        this.setState({
            state: e.target.value
        })
    }
    handleZipcode(e){
        this.setState({
            zipcode: e.target.value
        })
    }
    handleComplete(){
        console.log('function running')
        axios.post(`http://localhost:4000/api/houses`,{house_name: this.state.name,
        house_address: this.state.address,
        house_city: this.state.city,
        house_state: this.state.state,
        house_zip: this.state.zipcode})
        .then(()=>{window.location.assign('http://localhost:3000/#/')})
    }
    render(){
        return(
            <div>
                <div>Wizard</div>
                <button>Cancel</button>
                <h2>Name</h2>
                <input placeholder='House Name' value={this.state.name} onChange={e=>this.handleName(e)}></input>
                <h2>Address</h2>
                <input placeholder = 'House Address' value={this.state.address} onChange={e=>this.handleAddress(e)}></input>
                <h2>City</h2>
                <input placeholder='City' value={this.state.city} onChange={e=>this.handleCity(e)}></input>
                <h2>State</h2>
                <input placeholder='Example: UT' value={this.state.state} onChange={e=>this.handleState(e)}></input>
                <h2>Zipcode</h2>
                <input placeholder='Zip' onChange={e=>this.handleZipcode(e)}></input>
                <button onClick={()=>this.handleComplete()}>Complete</button>
            </div>
        )
    }
    
}