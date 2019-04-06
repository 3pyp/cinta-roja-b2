import React, { Component } from 'react'

import './Header.css'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mensaje: 'My first Component',
            error: false
        }
    }

    componentWillMount(){
        // alert("Antes del render")
    }

    componentDidMount() {
        // alert("El render se montó")
    }

    cambiarEstado = () => {
        if(this.state.mensaje === "My first Component") {
            this.setState({
                mensaje: "Nuevo Mensaje"
            })
        } else {
            this.setState({
                mensaje: "My first Component",

            })
        }
        
    }

    render() {
        // alert("Montando el render")
        return (
            <div className="Header">
                <h2>
                   {this.state.mensaje}
                </h2>
                {/* <img alt="unsplash" src={this.props.img}></img> */}
            <button onClick={this.cambiarEstado}>Cambiar Mensaje</button>
            </div>
        )
    }
}

export default Header