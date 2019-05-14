import React from 'react'
import ProjectPanel from '../components/ProjectPanel';

import projects from '../resources/posts/projects/project.json';
import jsonToMarkdown from '../utils/jsonToMarkdown';

export default class ProjectsPage extends React.Component {
    render() {
        return projects.projects.map(obj => {
            return <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <ProjectPanel title={obj.title} resume={jsonToMarkdown(obj.resume)} img={obj.img} text={jsonToMarkdown(obj.text)}/>
                </div>
                <div className="col-2"></div>
            </div>
        })
    }
}