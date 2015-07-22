import {Model, Collection} from 'exoskeleton';

export class Task extends Model {}

export class TaskCollection extends Collection {
    model = Task;
}
