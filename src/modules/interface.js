/* import newForm from "./functions/newForm.js" */

export default function Interface () {

    const newForm = () => {
        const form = document.createElement("form")
        const label1 = document.createElement("label")
        const label2 = document.createElement("label")
        const label3 = document.createElement("label")
        const label4 = document.createElement("label")
        const input1 = document.createElement("input")
        const input2 = document.createElement("input")
        const input3 = document.createElement("input")
        const input4 = document.createElement("input")
        const br1 = document.createElement("br")
        const br2 = document.createElement("br")
        const br3 = document.createElement("br")
        const br4 = document.createElement("br")
        const br5 = document.createElement("br")
        const br6 = document.createElement("br")
        const br7 = document.createElement("br")
        const br8 = document.createElement("br")
        const submit = document.createElement("input")
    
        label1.for = "project"
        label1.textContent = "Project Name:"
        input1.type = "text"
        input1.name = "project"
        input1.placeholder = "Enter project name"
    
        label2.for = "title"
        label2.textContent = "Title:"
        input2.type = "text"
        input2.name = "title"
        input2.placeholder = "Enter title"
    
        label3.for = "content"
        label3.textContent = "To Do:"
        input3.type = "text"
        input3.name = "content"
        input3.placeholder = "Enter note here"
    
        label4.for = "dueDate"
        label4.textContent = "Date due:"
        input4.type = "date"
        input4.name = "dueDate"
        input4.placeholder = "Enter due date"
    
        submit.type = "button"
        submit.value = "submit"
    
        input1.setAttribute("id", "project")
        input2.setAttribute("id", "title")
        input3.setAttribute("id", "to-do")
        input4.setAttribute("id", "due-date")
        submit.setAttribute("id", "submit")
    
        form.appendChild(label1)
        form.appendChild(input1)
        form.appendChild(br1)
        form.appendChild(label2)
        form.appendChild(input2)
        form.appendChild(br2)
        form.appendChild(label3)
        form.appendChild(input3)
        form.appendChild(br3)
        form.appendChild(label4)
        form.appendChild(input4)
        form.appendChild(br4)
        form.appendChild(submit)
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

    const removeChildContent = (parent) => {
        while(parent.firstChild) {
            parent.removeChild(parent.firstChild)
        }
    }

    const displayLists = (lists) => {
        console.table(lists);
    }
    
    return { newForm, getToDoListData, removeChildContent, displayLists }
}