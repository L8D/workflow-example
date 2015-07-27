import React, {Component} from 'react';
import {Dispatcher} from 'flux';
import TestUtils from 'react/lib/ReactTestUtils';

export class WithDispatcher extends Component {
    static propTypes = {
        dispatcher: React.PropTypes.instanceOf(Dispatcher).isRequired,
        children: React.PropTypes.element.isRequired
    }

    static childContextTypes = {
        dispatcher: React.PropTypes.instanceOf(Dispatcher)
    }

    getChildContext() {
        const {dispatcher} = this.props;

        return {dispatcher};
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export function mountWithDispatcher(dispatcher, element) {
    const parent = TestUtils.renderIntoDocument(<WithDispatcher dispatcher={dispatcher}>
        {element}
    </WithDispatcher>);

    const component = TestUtils.findRenderedComponentWithType(parent, element.type);

    return component;
}
