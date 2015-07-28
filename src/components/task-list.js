import React, {Component} from 'react';

import {TaskCollection} from '../models/task';
import {TaskComponent} from './task';

export class TaskListComponent extends Component {
    static propTypes = {
        tasks: React.PropTypes.instanceOf(TaskCollection).isRequired,
        filterName: React.PropTypes.oneOf(['all', 'completed', 'active']).isRequired
    }

    render() {
        const {tasks, filterName} = this.props;
        const items = tasks
            .useFilter(filterName)
            .map(task => <TaskComponent key={task.cid} task={task}/>);

        return (
            <div className="tapp-task-list">{items}</div>
        );
    }
}
