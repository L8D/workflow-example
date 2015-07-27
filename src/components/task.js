import React, {Component} from 'react';
import {Dispatcher} from 'flux';

import {UpdateTaskAction} from '../actions';
import {Task} from '../models/task';

export class TaskComponent extends Component {
    static propTypes = {
        task: React.PropTypes.instanceOf(Task)
    }

    static contextTypes = {
        dispatcher: React.PropTypes.instanceOf(Dispatcher)
    }

    handleCompletedChange = event => {
        const {dispatcher} = this.context;
        const {task} = this.props;
        const {value} = event.target;

        dispatcher.dispatch(new UpdateTaskAction(task.id, {completed: value}));
    }

    render() {
        const {task} = this.props;

        return (
            <div className="tapp-task-list-item">
                <input
                    ref="checkmark"
                    type="checkbox"
                    value={task.isCompleted()}
                    onChange={this.handleCompletedChange}
                />
            </div>
        );
    }
}
