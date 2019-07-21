import React from 'react'
import './Card.css'

export default class Card extends React.Component {

    render() {
        return (
            <div className="card">
                {this.props.children}
            </div>
        )
    }
}