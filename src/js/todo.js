import { format } from "date-fns"

const todo = (title, description, priority, project, status) => {
    this.title = title
    this.description = description
    // TODO: let dueDate = new Date()
    this.priority = priority
    this.project = project
    this.status = status

    return {title, description, priority, project, status}
}