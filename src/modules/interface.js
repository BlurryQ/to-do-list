/* import newForm from "./functions/newForm.js" */

export default function Interface () {

    const toDoList = (_toDoList, _listIndex) => {
        const form = document.createElement("form")
        const projectLabel = document.createElement("label")
        const titleLabel = document.createElement("label")
        const toDoLabel = document.createElement("label")
        const dueDateLabel = document.createElement("label")
        const projectInput = document.createElement("input")
        const titleInput = document.createElement("input")
        const toDoInput = document.createElement("input")
        const dueDateInput = document.createElement("input")
        const projectBR = document.createElement("br")
        const titleBR = document.createElement("br")
        const toDoBR = document.createElement("br")
        const dueDateBR = document.createElement("br")
        const save = document.createElement("button")
    
        projectLabel.for = "project"
        projectLabel.textContent = "Project Name:"
        projectInput.type = "text"
        projectInput.name = "project"
        projectInput.placeholder = "Enter project name"
    
        titleLabel.for = "title"
        titleLabel.textContent = "Title:"
        titleInput.type = "text"
        titleInput.name = "title"
        titleInput.placeholder = "Enter title"
    
        toDoLabel.for = "to-do"
        toDoLabel.textContent = "To Do:"
        toDoInput.type = "text"
        toDoInput.name = "to-do"
        toDoInput.placeholder = "Enter note here"
    
        dueDateLabel.for = "dueDate"
        dueDateLabel.textContent = "Date due:"
        dueDateInput.type = "date"
        dueDateInput.name = "dueDate"
        dueDateInput.placeholder = "Enter due date"
    
        save.textContent = "Save"
        save.type = "button"
        save.value = "save"
    
        form.setAttribute("id", "new-form")
        projectInput.setAttribute("id", "project")
        titleInput.setAttribute("id", "title")
        toDoInput.setAttribute("id", "to-do")
        dueDateInput.setAttribute("id", "due-date")
        save.setAttribute("id", "save")
    
        form.appendChild(projectLabel)
        form.appendChild(projectInput)
        form.appendChild(projectBR)
        form.appendChild(titleBR)
        form.appendChild(titleInput)
        form.appendChild(titleBR)
        form.appendChild(toDoLabel)
        form.appendChild(toDoInput)
        form.appendChild(toDoBR)
        form.appendChild(dueDateLabel)
        form.appendChild(dueDateInput)
        form.appendChild(dueDateBR)

        if(_toDoList) {
            projectInput.value = _toDoList.project
            titleInput.value = _toDoList.title
            toDoInput.value = _toDoList["to-do"]
            dueDateInput.value = _toDoList["due-date"]

            const createdDateLabel = document.createElement("label")
            const createdDateSpan = document.createElement("span")
            const createdDateBR = document.createElement("br")

            createdDateLabel.textContent = "Created Date:"
            createdDateLabel.for = "created-date"
            createdDateSpan.textContent = _toDoList.created

            createdDateSpan.classList.add("createdDate")

            save.classList.add(_listIndex)
            form.setAttribute("id", _listIndex)
            
            form.appendChild(createdDateLabel)
            form.appendChild(createdDateSpan)
            form.appendChild(createdDateBR)
        }

        form.appendChild(save)
        return form
    }

    const getToDoListData = () => {
        const PROJECT = document.getElementById("project")
        const TITLE = document.getElementById("title")
        const TO_DO = document.getElementById("to-do")
        const DUE_DATE= document.getElementById("due-date")

        return {
            project: PROJECT.value,
            title: TITLE.value,
            "to-do": TO_DO.value,
            "due-date": DUE_DATE.value
        }
    }

    const removeChildContent = (...parents) => {
        for(const parent of parents) {
            while(parent.firstChild) {
                parent.removeChild(parent.firstChild)
            }
        }
    }

    const displayLists = (toDoLists, location) => {
        let _listIndex = 0
        for(const _list of toDoLists) {

            const list = toDoList(_list, _listIndex)
            location.appendChild(list)
            _listIndex += 1
        }
    }
    
    return { toDoList, getToDoListData, removeChildContent, displayLists }
}