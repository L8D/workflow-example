import React, {Component} from 'react';

import {TaskCollection} from '../models/task';
import {TaskComponent} from './task';

export class TaskListComponent extends Component {
    static propTypes = {
        tasks: React.PropTypes.instanceOf(TaskCollection)
    }

    render() {
        const {tasks} = this.props;
        const items = tasks.map(task => <TaskComponent key={task.cid} task={task}/>);

        return (
            <div className="tapp-task-list">{items}</div>
        );
    }
}
