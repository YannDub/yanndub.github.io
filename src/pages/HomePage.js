import React from 'react'
import ReackMarkdown from "react-markdown";

import '../App.css';
import Panel from "../components/panels/Panel";

import index from '../resources/posts/home'

export default class HomePage extends React.Component {

    render() {
        if(!this.state.home) return <div>Chargement</div>;

        console.error(this.state.home);

        return (
            <div>
                <div className="row height_space"></div>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <Panel title={this.state.home.title}>
                            <ReackMarkdown source={this.state.home.text}/>
                        </Panel>
                    </div>
                    <div className="col-2"></div>
                </div>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <Panel title={this.state.home.coord.title}>
                            <ReackMarkdown source={this.state.home.coord.text}/>
                        </Panel>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        )
    }

    constructor() {
        super();
        this.state = {
            home: undefined
        }
        index().then(elem => this.setState(() => ({home: elem})));
    }
}