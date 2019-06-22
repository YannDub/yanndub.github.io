import React from 'react'
import SeparatorMenu from './SeparatorMenu';
import {Link} from 'react-router-dom'

export default class HeaderMenu extends React.Component {
    
    toggleMenu() {
        let menus = document.getElementsByClassName("menu");
        for(let m of menus) {
            m.classList.toggle("hidden");
        }
    }

    render() {
        return (
            <header className="row">
                <div className="col-12 desktop">
                    <div className="col-2 title">
                        <Link to="/">YannDub</Link>
                    </div>
                    <div className="col-8">
                    </div>
                    <div className="col-2 nav">
                        <ul>
                            <li><Link to="/cv/">CV</Link></li>
                            <li><Link to="/projects/">Projets</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="col-12 responsive">
                    <div className="row nav">
                        <span onClick={this.toggleMenu}>☰</span>
                    </div>
                    <div className="row menu hidden">
                        <ul>
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="/cv/">CV</Link></li>
                            <li><Link to="/projects/">Projets</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}