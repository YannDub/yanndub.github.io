import React from 'react';
import "./style.css";

import ReactMarkdown from 'react-markdown';

export default class Timeline extends React.Component {

    renderInfo() {
        return this.props.timeline.map((info, i) => {
            let side = i % 2 == 0 ? "timeline-left" : "timeline-right";
            let classContainer = `timeline-container ${side}`;
            let missions = info.missions.map(mission => {
                return (
                    <li>
                        <ReactMarkdown source={mission} />
                    </li>
                )
            });

            return <div class={classContainer}>
            <div class="timeline-content">
                <h2 class="date">{info.date}</h2>
                <h3 class="activity">{info.place} - {info.activity}</h3>
                <ul>
                    {missions}
                </ul>
            </div>
        </div>
        })
    }

    render() {
        return (
            <div class="timeline">
                {this.renderInfo()}
            </div>
        )
    }
}