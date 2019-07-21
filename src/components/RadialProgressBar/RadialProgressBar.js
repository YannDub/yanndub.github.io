import './RadialProgressBar.css';
import React from 'react'

export default class RadialProgressBar extends React.Component {

    render() {
        return (
            <div className={`rbar-content rbar-${this.props.amount}`}>
                <span className="label">{this.props.label}</span>
                <div className="rbar-pie">
                    <div className="rbar-left rbar-half"></div>
                    <div className="rbar-right rbar-half"></div>
                </div>
            </div>
        )
    }
}