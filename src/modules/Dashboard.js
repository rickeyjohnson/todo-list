import { Todo } from './Todo'
import { Project } from './Project'

export class Dashboard {
    projects = []

    addProject(project) {
        this.projects.push(new Project("p"))
    }

    removeProject(project) {
        let index = this.projects.indexOf(project)
        this.projects.splice(index, 1)
    }
}