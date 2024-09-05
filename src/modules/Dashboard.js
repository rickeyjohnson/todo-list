import { Todo } from './Todo'
import { Project } from './Project'

export class Dashboard {
    projects = []

    addProject() {
        this.projects.push(new Project(""))
    }

    removeProject(project) {
        let index = this.projects.indexOf(project)
        this.projects.splice(index, 1)
    }
}