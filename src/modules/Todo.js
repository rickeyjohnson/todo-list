export class Todo {
    constructor (title, project, completed = false) {
        this.title = title
        this.project = project
        this.completed = completed
    }

    editTitle(nTitle) {
        this.title = nTitle
    }

    editDescription(nDescription) {
        this.description = nDescription
    }

    toggleCompleted() {
        this.completed ? this.completed = false : this.completed = true
    }
}