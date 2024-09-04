import { Todo } from './Todo'
import { Project } from './Project'

class Dashboard {
    projects = []

    constructor() {
        this.projects.push(new Project("default"))
    }

    addProject(project) {
        this.projects.push(project)
    }

    removeProject(project) {
        let index = this.findIndex((element) => { element === project })
        this.projects.splice(index, 1)
    }
}