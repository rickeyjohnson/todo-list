import { Todo } from './Todo'

export class Project {
    todos = []

    constructor(title) {
        this.title = title
    }

    addTodo(todo) {
        this.todos.push(todo)
    }

    removeTodo(todo) {
        let index = this.findIndex((element) => { element === todo })
        this.todos.splice(index, 1)
    }
}