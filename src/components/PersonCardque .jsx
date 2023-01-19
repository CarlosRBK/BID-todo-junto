import React, { Component } from "react";
import './PersonCardque.css';

class PersonCardque  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    suma = () =>{
        this.setState({age: this.state.age+1})
    }
    render() {
        const count = {  }
        return (
            <div className="texto-Nombre-Apellido">
                <div className="nombre-apellido">
                    <h1>{ this.props.firstName },</h1>
                    <h1>{ this.props.lastName }</h1>
                </div>
                <p>Age: { this.state.age }</p>
                <p>hair Color: { this.props.hairColor }</p>
                <button onClick = {this.suma} id="btn"> Birthday Button For 
                { this.props.lastName } 
                { this.props.firstName } 
                </button>
            </div>
        );
    }
}

export default PersonCardque;