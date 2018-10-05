import React from 'react';

export default function House(props){
    let id = props.house.house_id
    return(
        <div>
            <div>Name: {props.house.house_name}</div>
            <div>Addres: {props.house.house_address}</div>
            <div>City: {props.house.house_city}</div>
            <div>State: {props.house.house_state}</div>
            <div>Zipcode: {props.house.house_zip}</div>
            <button onClick={()=>props.handleDelete(id)}>Delete</button>
        </div>
        
        
    )
}