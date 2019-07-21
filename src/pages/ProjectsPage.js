import React from 'react'
import ProjectPanel from '../components/ProjectPanel';

import projects from '../resources/posts/projects';

export default class ProjectsPage extends React.Component {
    render() {
        if(!this.state.projects) return <div>Chargement</div>

        return this.state.projects.projects.map((obj, key) => {
            return <div key={key} className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <ProjectPanel title={obj.title} resume={obj.resume} img={obj.img} youtube={obj.youtube} text={obj.text} type={obj.type}/>
                </div>
                <div className="col-2"></div>
            </div>
        })
    }

    constructor() {
        super();
        this.state = {
            projects: undefined
        }
        projects().then(elem => this.setState(() => ({projects: elem})));
    }
}