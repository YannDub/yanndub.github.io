import React from 'react';
import Timeline from '../components/Timeline';
import cv from '../resources/posts/cv';

export default class CVPage extends React.Component {
    render() {
        return <div>
            <div class="row">
                <Timeline timeline={cv.timeline}/>
            </div>
        </div>
    }
}