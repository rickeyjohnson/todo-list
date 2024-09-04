import { Todo } from './Todo'

export class Project {
    todos = []

    constructor(title="deafult") {
        this.title = title
    }

    addTodo(todo) {
        this.todos.push(todo)
    }

    removeTodo(todo) {
        let index = this.todos.indexOf(todo)
        this.todos.splice(index, 1)
    }
}