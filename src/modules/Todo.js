export const todo = (title, description, project, status) => {
    const editTodo = (newTitle = title, newDescription = description, newProject = project, newStatus = status) => {
        this.title = title
        this.description = newDescription
        this.project = newProject
        this.status = newStatus
    }

    return {title, description, project, status}
}