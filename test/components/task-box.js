/* global describe, it, beforeEach */

import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import {Dispatcher} from 'flux';
import {mountWithDispatcher} from '../../src/components/util';

import {CreateTaskAction} from '../../src/actions';
import {TaskBoxComponent} from '../../src/components/task-box';

describe('TaskBoxComponent', function() {
    var spy;
    var component;
    var inputBox;

    beforeEach(function() {
        const dispatcher = new Dispatcher();
        spy = expect.spyOn(dispatcher, 'dispatch');

        component = mountWithDispatcher(dispatcher, <TaskBoxComponent/>);
        inputBox = component.refs.inputBox;
    });

    describe('when the user hits enter', function() {
        it('should create new tasks when user hits enter', function() {
            TestUtils.Simulate.change(inputBox, {target: {value: 'some title'}});
            TestUtils.Simulate.keyDown(inputBox, {which: 13});
            expect(spy).toHaveBeenCalledWith(new CreateTaskAction('some title'));
        });

        it('should clear the input box after the user creates a task', function() {
            TestUtils.Simulate.change(inputBox, {target: {value: 'some title'}});
            expect(inputBox.value).toBe('some title');

            TestUtils.Simulate.keyDown(inputBox, {which: 13});
            expect(inputBox.value).toBe('');
        });

        it('should not do anything when user hits another key', function() {
            TestUtils.Simulate.change(inputBox, {target: {value: 'some title'}});
            TestUtils.Simulate.keyDown(inputBox, {which: 27});
            expect(spy.calls.length).toBe(0);
        });
    });
});
