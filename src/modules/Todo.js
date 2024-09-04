export class Todo {
    constructor (title, project, completed = false) {
        this.title = title
        this.project = project
        this.completed = completed
    }
}