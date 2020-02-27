import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './contador.css'

class Contador extends Component {
state = {
    numero: 0
}
//nao necessario colocar o const nem o let e var 
aumentar = () => {
    let num = this.state.numero;

    num++;
    // this.setState({numero: this.state.numero + 1}) tbm funciona
    this.setState({ numero: num });
}

diminuir = () => {
    let num = this.state.numero;
    //if ternario
    num < 1 ? alert("Hoje nao Faro!!") : num--;

    this.setState({ numero: num });
}


render() {
    return (
        <div>
            <h1 className="contador-titulo">
                {this.state.numero}
            </h1>
            <Button
            className="mr-2" 
            color="success" 
            outline 
            onClick={this.aumentar}>Aumentar</Button>
            <Button  
            color="danger" 
            
            outline 
            onClick={this.diminuir}>Diminuir</Button>
        </div>
    );
}
}

export default Contador;