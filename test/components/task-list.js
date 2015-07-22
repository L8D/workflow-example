/* global describe, it */

import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';

import {Task, TaskCollection} from '../../src/models/task';
import {TaskListComponent} from '../../src/components/task-list';
import {TaskComponent} from '../../src/components/task';

describe('TaskListComponent', function() {
    it('should not have child tasks when task list is empty', function() {
        const tasks = new TaskCollection();
        const component = TestUtils.renderIntoDocument(<TaskListComponent tasks={tasks}/>);
        const items = TestUtils.scryRenderedComponentsWithType(component, TaskComponent);

        expect(items.length).toBe(0);
    });

    it('should have child tasks when task list has tasks', function() {
        const tasks = new TaskCollection([
            new Task({title: 'Do something'}),
            new Task({title: 'Do something else'}),
            new Task({title: 'PASS THE TEST'})
        ]);

        const component = TestUtils.renderIntoDocument(<TaskListComponent tasks={tasks}/>);
        const items = TestUtils.scryRenderedComponentsWithType(component, TaskComponent);

        expect(items.length).toBe(3);
    });
});
