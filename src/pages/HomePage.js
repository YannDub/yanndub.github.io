import React from 'react'
import ReackMarkdown from "react-markdown";

import jsonToMarkdown from '../utils/jsonToMarkdown';
import '../App.css';
import Panel from "../components/Panel";

import index from '../resources/posts/home/index.json'

export default class HomePage extends React.Component {

    render() {
        return (
            <div>

                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <Panel title={index.title}>
                            <ReackMarkdown source={jsonToMarkdown(index.text)}/>
                        </Panel>
                    </div>
                    <div className="col-2"></div>
                </div>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <Panel title={index.coord.title}>
                            <ReackMarkdown source={jsonToMarkdown(index.coord.text)}/>
                        </Panel>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        )
    }
}