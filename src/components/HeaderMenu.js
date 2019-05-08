import React from 'react'
import SeparatorMenu from './SeparatorMenu';

export default class HeaderMenu extends React.Component {

    render() {
        return (
        <header className="row">
            <div className="col-1"></div>
            <div className="col-2">
                <ul>
                    <li><a href="/actus/">Actualité</a></li>
                </ul>
            </div>
            <SeparatorMenu />
            <div className="col-4 title">
                <a href="/">YannDub</a>
            </div>
            <SeparatorMenu />
            <div className="col-2">
                <ul>
                    <li><a href="/cv/">CV</a></li>
                    <li><a href="/projects/">Projets</a></li>
                </ul>
            </div>
            <div className="col-1"></div>
        </header>
        )
    }
}