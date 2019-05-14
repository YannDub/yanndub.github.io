import React from 'react'
import './Panel.css'

export default class Panel extends React.Component {
    render() {
        return ( 
        <div className="panel">
            <div className="row row-title">
                <h1 className="panel-title">{this.props.title}</h1>
            </div>
            <div className="row panel-content">
                {this.props.children}
            </div>
        </div>
        )
    }
}