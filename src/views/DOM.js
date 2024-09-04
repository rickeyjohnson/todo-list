import { Dashboard } from '../modules/Dashboard'
import { Project } from '../modules/Project'

let dashboard = new Dashboard()
let project = new Project()

export function initializeDOM() {
    const addButton = document.querySelector("#add-btn")

    addButton.addEventListener("click", () => {
        dashboard.addProject()
    })
}