import React from 'react'
import './Panel.css'

export default class Panel extends React.Component {
    render() {
        let icon = null;
        if(this.props.icon) {
            icon = <diV class="icon">
                <i class="material-icons">{this.props.icon}</i>
            </diV>
        }

        return ( 
        <div className="panel">
            <div className="row row-title">
                {icon}
                <h1 className="panel-title">{this.props.title}</h1>
            </div>
            <div className="row panel-content">
                {this.props.children}
            </div>
        </div>
        )
    }
}