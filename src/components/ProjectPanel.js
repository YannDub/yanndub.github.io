import Panel from "./Panel";
import React from 'react'

import ReactMarkdown from 'react-markdown';

export default class ProjectPanel extends React.Component {

    constructor(context, props) {
        super(context, props);
        this.state = {hidden: true}

        this.showText = this.showText.bind(this);
    }

    showText() {
        this.setState(() => ({hidden: !this.state.hidden}))
    }

    render() {
        let text = this.state.hidden ? "" : <div className="row project-text"><ReactMarkdown source={this.props.text} /></div>

        return (
            <Panel title={this.props.title}>
                <div className="row">
                    <div className="col-4 left">
                        <img src={this.props.img} />
                    </div>
                    <div className="col-8 right">
                        <ReactMarkdown source={this.props.resume}/>
                    </div>
                </div>
                <div className="row project-toggle">
                    <div className="col-10"></div>
                    <div className="col-2">
                        <a onClick={this.showText}>{this.state.hidden ? "En savoir plus" : "Revenir en arrière"}</a>
                    </div>
                </div>
                {text}
            </Panel>
        )
    }
}