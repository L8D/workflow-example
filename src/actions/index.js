export class CreateTaskAction {
    constructor(title) {
        this.title = title;
    }
}

export class UpdateTaskAction {
    constructor(taskId, attrs) {
        this.taskId = taskId;
        this.attrs = attrs;
    }
}
