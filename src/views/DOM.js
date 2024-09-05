import { Dashboard } from '../modules/Dashboard'
import { Project } from '../modules/Project'
import { createElementWithIdAndClass, storageAvailable } from '../js_components/helperFunctions'

let dashboard = new Dashboard()
let project = new Project()

export function initializeDOM() {
    // const addButton = document.querySelector("#add-btn")
    // addButton.addEventListener("click", () => {
    //     alertHi()
    // })

    // show projects and todos on the dashboard

    // if add project is pressed, create new project
        // project creation form displays
        // dashboard.projects updated

    // if add todo button is pressed inside a particular project, create new todo
        // todo creation form displays
        // project.todos is updated

    function displayProjects() {
        const projectContainer = createElementWithIdAndClass("div", "project-container", "project card")
    }

    function displayTodo() {
        // code
    }

    function saveProject() {
        if (storageAvailable("localStorage")) {
            // yay we can use local storage
        } else {
            // no we cant use local storage!
        }
    }

    function deleteProject() {
        // code
    }

}