export class Todo {
    constructor (title, description, project, completed = false) {
        this.title = title
        this.description = description
        this.project = project
        this.completed = completed
    }

    editTitle(nTitle) {
        this.title = nTitle
    }

    editDescription(nDescription) {
        this.description = nDescription
    }

    editCompleted(nCompleted) {
        this.completed = nCompleted
    }
}