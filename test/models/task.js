/* global describe, it */

import expect from 'expect';

import {Task} from '../../src/models/task';

describe('Task', function() {
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
