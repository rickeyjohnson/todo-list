import './todo'

const project = (title, description) => {
    let todos = []

    const addTodo = (todo) => {
        todos.push(todo)
    }

    const removeTodo = (todo) => {
        todos.pop(todo)
    }

    return {title, description, addTodo}
}