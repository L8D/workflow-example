import React, {Component} from 'react';

import {Task} from '../models/task';

export class TaskComponent extends Component {
    static propTypes = {
        task: React.PropTypes.instanceOf(Task)
    }

    render() {
        return (
            <div className="tapp-task-list-item"/>
        );
    }
}
