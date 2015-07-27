/* global describe, it */

import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import {Dispatcher} from 'flux';
import {mountWithDispatcher} from '../../src/components/util';

import {Task} from '../../src/models/task';
import {UpdateTaskAction} from '../../src/actions';
import {TaskComponent} from '../../src/components/task';

describe('TaskComponent', function() {
    it('should complete the task', function() {
        const task = new Task({title: 'A task'});
        const {spy, component} = setup(<TaskComponent task={task}/>);
        const {checkmark} = component.refs;

        TestUtils.Simulate.change(checkmark, {target: {value: true}});

        expect(spy).toHaveBeenCalledWith(new UpdateTaskAction(task.id, {completed: true}));
    });
});

function setup(element) {
    const dispatcher = new Dispatcher();
    const spy = expect.spyOn(dispatcher, 'dispatch');

    const component = mountWithDispatcher(dispatcher, element);

    return {spy, dispatcher, component};
}
