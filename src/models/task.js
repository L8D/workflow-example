import {Model, Collection} from 'exoskeleton';
import uuid from 'uuid';

export class Task extends Model {
    defaults() {
        var now = new Date();

        return {
            id: uuid.v4(),
            title: 'Untitled',
            completed: false,
            created_at: now,
            updated_at: now
        };
    }

    isCompleted() {
        return this.get('completed');
    }

    parse(attrs) {
        return {
            id: String(attrs.id),
            title: String(attrs.title),
            completed: Boolean(attrs.completed),
            created_at: new Date(attrs.created_at),
            updated_at: new Date(attrs.updated_at)
        };
    }
}

export class TaskCollection extends Collection {
    model = Task;
}
