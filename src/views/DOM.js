import { Dashboard } from '../modules/Dashboard'
import { Project } from '../modules/Project'
import { createElementWithIdAndClass, storageAvailable } from '../js_components/helperFunctions'

let dashboard = new Dashboard()
let project = new Project()

export function initializeDOM() {
    const addButton = document.querySelector(".add-btn")
    addButton.addEventListener("click", () => {
        // add project
            // add project to dashboard
                // display projectForm UI
                // get data from form
                // insert it in new project for dashboard
            // add projectUI to dashboardUI
            // save product to local storage
    })

    function addProject() {
        // display project form creation
        // add project to dashboard (internally)
        // display project
    }

    function saveProject() {
        if (storageAvailable("localStorage")) {
            // yay we can use local storage
        } else {
            // no we cant use local storage!
        }
    }
}