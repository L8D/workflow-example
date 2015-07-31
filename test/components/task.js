/* global describe, it */

import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import {setupElement} from '../util';

import {Task} from '../../src/models/task';
import {UpdateTaskAction} from '../../src/actions';
import {TaskComponent} from '../../src/components/task';

describe('TaskComponent', function() {
    it('should complete the task', function() {
        const task = new Task({title: 'A task'});
        const {spy, component} = setupElement(<TaskComponent task={task}/>);
        const {checkmark} = component.refs;

        TestUtils.Simulate.change(checkmark, {target: {value: true}});

        expect(spy).toHaveBeenCalledWith(new UpdateTaskAction(task.id, {completed: true}));
    });
});
