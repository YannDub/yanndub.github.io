import './SkillCard.css';
import React from 'react';
import RadialProgressBar from '../RadialProgressBar';
import Card from '../Card'

export default class SkillCard extends React.Component {

    render() {
        return (
            <Card>
                <div className="skill-amount">
                    <RadialProgressBar amount={skillToPercent[this.props.skillAmount]} label={this.props.skillName} />
                </div>
                <div className="skill-content">
                    <span className="skill-level-title">Niveau</span>
                    <span className="skill-level">{this.props.skillAmount.charAt(0).toUpperCase() + this.props.skillAmount.slice(1)}</span>
                </div>
            </Card>
        )
    }
}

const skillToPercent = {
    débutant: "25",
    intermédiaire: "50",
    avancé: "75",
    expert: '100'
}