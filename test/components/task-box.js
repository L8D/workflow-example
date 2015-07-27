/* global describe, it, beforeEach */

import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import {Dispatcher} from 'flux';
import {setupElement} from '../../src/components/util';

import {CreateTaskAction} from '../../src/actions';
import {TaskBoxComponent} from '../../src/components/task-box';

describe('TaskBoxComponent', function() {
    describe('when the user hits enter', function() {
        it('should create new tasks when user hits enter', function() {
            const {component, spy} = setupElement(<TaskBoxComponent/>);
            const {inputBox} = component.refs;

            TestUtils.Simulate.change(inputBox, {target: {value: 'some title'}});
            TestUtils.Simulate.keyDown(inputBox, {which: 13});

            expect(spy).toHaveBeenCalledWith(new CreateTaskAction('some title'));
        });

        it('should clear the input box after the user creates a task', function() {
            const {component, spy} = setupElement(<TaskBoxComponent/>);
            const {inputBox} = component.refs;

            TestUtils.Simulate.change(inputBox, {target: {value: 'some title'}});
            expect(inputBox.value).toBe('some title');

            TestUtils.Simulate.keyDown(inputBox, {which: 13});
            expect(inputBox.value).toBe('');
        });

        it('should not do anything when user hits another key', function() {
            const {component, spy} = setupElement(<TaskBoxComponent/>);
            const {inputBox} = component.refs;

            TestUtils.Simulate.change(inputBox, {target: {value: 'some title'}});
            TestUtils.Simulate.keyDown(inputBox, {which: 27});
            expect(spy.calls.length).toBe(0);
        });
    });
});
