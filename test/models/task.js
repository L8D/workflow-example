/* global describe, it */

import expect from 'expect';

import {Task, TaskCollection} from '../../src/models/task';

describe('Task', function() {
    describe('#parse()', function() {
        it('should parse fields from a JSON response', function() {
            const task = new Task({
                id: 'c277fa80-3498-11e5-96e8-aa59f186852f',
                title: 'Foo',
                completed: false,
                created_at: '2015-07-27T19:49:47.795Z',
                updated_at: '2015-07-27T19:49:47.795Z'
            }, {parse: true});

            expect(task.attributes).toEqual({
                id: 'c277fa80-3498-11e5-96e8-aa59f186852f',
                title: 'Foo',
                completed: false,
                created_at: new Date('2015-07-27T19:49:47.795Z'),
                updated_at: new Date('2015-07-27T19:49:47.795Z')
            });
        });
    });
});

describe('TaskCollection', function() {
    describe('#useFilter', function() {
        const task1 = new Task({title: 'Foo'});
        const task2 = new Task({title: 'Bar', completed: true});
        const task3 = new Task({title: 'Baz'});

        const tasks = new TaskCollection([task1, task2, task3]);

        it('fails when an invalid filter is used', function() {
            expect(function() {
                tasks.useFilter('/');
            }).toThrow(/not a valid filterName/);
        });

        it('lists all tasks when "all" is used', function() {
            expect(tasks.useFilter('all')).toEqual([task1, task2, task3]);
        });

        it('lists active tasks when "active" is used', function() {
            expect(tasks.useFilter('active')).toEqual([task1, task3]);
        });

        it('lists completed tasks when "completed" is used', function() {
            expect(tasks.useFilter('completed')).toEqual([task2]);
        });
    });
});
