import React, { Component } from 'react'

/*
    'this.props' 
    contiene las propiedades que el componente padre 
    manda al componente hijo al inicializar el componente :)
 */

class CardComponent extends Component {
  render() {
      return (
        <div className="card">
            <div className="card-content">
                <span className="card-title">
                    {this.props.title}
                </span>
                <p>
                    {this.props.director}
                </p>
            </div>
        </div>
    )
  }
}

export default CardComponent;