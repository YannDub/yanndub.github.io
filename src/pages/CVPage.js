import React from 'react';
import Timeline from '../components/Timeline';
import cv from '../resources/posts/cv';
import Panel from '../components/Panel';
import SkillCard from '../components/SkillCard';

export default class CVPage extends React.Component {
    createSkill(skills) {
        const skillCards = skills.map(elem => <SkillCard skillAmount={elem.skillAmount} skillName={elem.skillName} />);
        
        return (
            <div class="row" style={{textAlign: 'center'}}>
                {skillCards}
            </div>
        )
    }

    createSkills() {
        const panels = cv.skills.map(elem => {
            return (
                <Panel title={elem.title}>
                    {this.createSkill(elem.items)}
                </Panel>
            )
        })

        return (
            <div class="row">
                <div className="col-1"></div>
                <div className="col-10">
                    {panels}
                </div>
                <div className="col-1"></div>
            </div>
        )
    }
    
    render() {
        return <div>
            <div class="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <Panel title="Expériences">
                        <Timeline timeline={cv.timeline}/>
                    </Panel>
                </div>
                <div className="col-1"></div>
            </div>
            {this.createSkills()}
        </div>
    }
}