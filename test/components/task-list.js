/* global describe, it */

import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import {setupElement} from '../../src/components/util';

import {Task, TaskCollection} from '../../src/models/task';
import {TaskListComponent} from '../../src/components/task-list';
import {TaskComponent} from '../../src/components/task';

describe('TaskListComponent', function() {
    const tasks = new TaskCollection([
        new Task({title: 'Do something'}),
        new Task({title: 'Do something else', completed: true}),
        new Task({title: 'PASS THE TEST'})
    ]);

    it('should list all tasks for the "all" filter', function() {
        const {component} = setupElement(<TaskListComponent filterName="all" tasks={tasks}/>);
        const items = TestUtils.scryRenderedComponentsWithType(component, TaskComponent);

        expect(items.length).toBe(3);
    });

    it('should list active tasks for the "active" filter', function() {
        const {component} = setupElement(<TaskListComponent filterName="active" tasks={tasks}/>);
        const items = TestUtils.scryRenderedComponentsWithType(component, TaskComponent);

        expect(items.length).toBe(2);
    });

    it('should list completed tasks for the "completed" filter', function() {
        const {component} = setupElement(<TaskListComponent filterName="completed" tasks={tasks}/>);
        const items = TestUtils.scryRenderedComponentsWithType(component, TaskComponent);

        expect(items.length).toBe(1);
    });
});
