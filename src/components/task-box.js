import React, {Component} from 'react';
import {Dispatcher} from 'flux';

import {CreateTaskAction} from '../actions';

export class TaskBoxComponent extends Component {
    static contextTypes = {
        dispatcher: React.PropTypes.instanceOf(Dispatcher)
    }

    state = {
        title: ''
    }

    handleChange = event => {
        this.setState({title: event.target.value});
    }

    handleKeyDown = event => {
        const {dispatcher} = this.context;
        const {title} = this.state;

        if (event.which === 13) { // enter
            dispatcher.dispatch(new CreateTaskAction(title));
            this.setState({title: ''});
        }
    }

    render() {
        const {title} = this.state;

        return (
            <div className="tapp-task-box">
                <input
                    className="tapp-task-box-input"
                    ref="inputBox"
                    value={title}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                />
            </div>
        );
    }
}
