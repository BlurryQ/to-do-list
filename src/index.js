
import style from "./style.css"
import DATA from "./modules/data.js"
import INTERFACE from "./modules/interface.js"
import GET_DATE from "./modules/get-date.js"

/* ---------- ---------- ---------- ---------- ---------- */
const controller = () => {

    const Interface = INTERFACE()
    const Data = DATA()
    const getDate = GET_DATE()
    const TO_DO = document.getElementById("to-do")
    const CURRENT_PROJECTS = document.getElementById("current-projects")

    const projectsToDisplay = () => {
        const toDoLists = Data.get()
        const allProjects = []
        for(const list in toDoLists) {
            allProjects.push(toDoLists[list].project)
        }
        return allProjects
    }

    //create side bar
    const createProjectsSidebar = (removeChildContent) => {
        if(removeChildContent) Interface.removeChildContent(CURRENT_PROJECTS)
        const projects = projectsToDisplay()
        Interface.displayProjects(projects, CURRENT_PROJECTS)
    }
        //pass down list of projects

    //listeners for side bar

        //if pressed only show specific projects

    //logic function for sidebar

        //if textContent === toDoList.project > Interface.displayProjectLists(projectToDisplay)

    const addToDoList = () => {
        const newForm = document.getElementById("new-form")
        Data.add(Interface.getToDoListData(newForm), getDate.formatted())
        Interface.clearFormValues(newForm)
        newForm.style.cssText = "display: none;" 
    }

    const updateToDoList = (formID) => {
        const updatedForm = document.getElementById(formID)
        const formIndex = getIndexFromID(formID)
        Data.update(Interface.getToDoListData(updatedForm), formIndex)
    }

    const removeToDoList = (formID) => {
        const index = getIndexFromID(formID)
        Data.remove(index)
        updatePegboard(true)
    }
    
    const startFormListener = () => {
        toggleNewFormListener()
        const FORMS = document.querySelectorAll("form")
        FORMS.forEach(form => {
            form["save"].addEventListener("click", () => {
                form.id === "new-form" ? addToDoList() : updateToDoList(form.id)
                createProjectsSidebar(true)
                updatePegboard(true)
            })
            form["remove"].addEventListener("click", () => {
                removeToDoList(form.id)
                createProjectsSidebar(true)
            })
        })
    }
    
    const toggleNewFormListener = () => {
        TO_DO.appendChild(Interface.toDoList()) 
        const NEW_FORM = document.getElementById("new-form")
        NEW_FORM.style.cssText = "display: none;"
        const TOGGLE_NEW_FORM = document.getElementById("toggle-new-form")
        TOGGLE_NEW_FORM.addEventListener("click", () => NEW_FORM.style.cssText = NEW_FORM.style.cssText === "display: flex;" ? "display: none;" : "display: flex;"
        )
    }

    const getIndexFromID = (formID) => {
        //formID = `index-${array index}`
        const splitID = formID.split("-")  
        return splitID[1]   
    }

    const updatePegboard = (removeChildContent) => {
        if(removeChildContent) Interface.removeChildContent(TO_DO)
        Interface.displayLists(Data.get(), TO_DO);
        startFormListener()
    }

    createProjectsSidebar(false)
    updatePegboard(false)
}

controller()
