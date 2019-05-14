import React from 'react'
import SeparatorMenu from './SeparatorMenu';
import {Link} from 'react-router-dom'

export default class HeaderMenu extends React.Component {

    render() {
        return (
        <header className="row topnav">
            <div className="col-1"></div>
            <div className="col-2 nav">
                <ul>
                    <li><Link to="/actus/">Actualité</Link></li>
                </ul>
            </div>
            <SeparatorMenu />
            <div className="col-4 title">
                <Link to="/">YannDub</Link>
            </div>
            <SeparatorMenu />
            <div className="col-2 nav">
                <ul>
                    <li><Link to="/cv/">CV</Link></li>
                    <li><Link to="/projects/">Projets</Link></li>
                </ul>
            </div>
            <div className="col-1"></div>
        </header>
        )
    }
}