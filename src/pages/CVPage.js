import React from 'react';
import Timeline from '../components/Timeline';
import cv from '../resources/posts/cv';
import Panel from '../components/Panel';
import SkillCard from '../components/SkillCard';

export default class CVPage extends React.Component {
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
            <div class="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <Panel title="Compétences">
                        <div class="row">
                            <div class="col-4">
                                <SkillCard skillAmount="débutant" skillName="Test"/>
                            </div>
                            <div class="col-4">
                                <SkillCard skillAmount="intermédiaire" skillName="Test"/>
                            </div>
                            <div class="col-4">
                                <SkillCard skillAmount="avancé" skillName="Test"/>
                            </div>
                        </div>
                    </Panel>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    }
}