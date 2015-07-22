/* global describe, it */

import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import {Dispatcher} from 'flux';
import {WithDispatcher} from '../../src/components/util';

import {CreateTaskAction} from '../../src/actions';
import {TaskBoxComponent} from '../../src/components/task-box';

describe('TaskBoxComponent', function() {
    var spy;
    var component;
    var inputBox;

    beforeEach(function() {
        const dispatcher = new Dispatcher();
        spy = expect.spyOn(dispatcher, 'dispatch');

        const parent = TestUtils.renderIntoDocument(<WithDispatcher dispatcher={dispatcher}>
            <TaskBoxComponent/>
        </WithDispatcher>);

        component = TestUtils.findRenderedComponentWithType(parent, TaskBoxComponent);
        inputBox = component.refs.inputBox;
    });

    describe('when the user hits enter', function() {
        beforeEach(function() {
            TestUtils.Simulate.change(inputBox, {target: {value: 'some title'}});
            TestUtils.Simulate.keyDown(inputBox, {which: 13});
        });

        it('should create new tasks when user hits enter', function() {
            expect(spy).toHaveBeenCalledWith(new CreateTaskAction('some title'));
        });

        it('should clear the input box after the user creates a task', function() {
            expect(inputBox.value).toBe('');
        });
    });
});
