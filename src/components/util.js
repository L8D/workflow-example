import React, {Component} from 'react';
import {Dispatcher} from 'flux';

export class WithDispatcher extends Component {
    static childContextTypes = {
        dispatcher: React.PropTypes.instanceOf(Dispatcher)
    }

    static propTypes = {
        dispatcher: React.PropTypes.instanceOf(Dispatcher)
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }

    getChildContext() {
        const {dispatcher} = this.props;

        return {dispatcher};
    }
}
