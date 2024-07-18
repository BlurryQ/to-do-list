
import style from "./style.css"
/* import DATA from "./list-data.json" */
import DATA from "./modules/data.js"
import INTERFACE from "./modules/interface.js"

/* ---------- ---------- ---------- ---------- ---------- */
const Mediator = () => {

    const Interface = INTERFACE()
    const Data = DATA()
    const CONTENT = document.getElementById("content")
    const FORM_BUTTON = document.getElementById("form-button")

    let toDoLists = []
    const storedToDoLists = Data.get()
    if(storedToDoLists) toDoLists = storedToDoLists

    Interface.displayLists(Data.get());
    let showForm = false;

    FORM_BUTTON.addEventListener("click", () => {
        showForm = !showForm
        if(showForm) { 
            CONTENT.appendChild(Interface.newForm()) 
            const submitButton = document.getElementById("submit")
            submitButton.addEventListener("click", () => {
                showForm = !showForm
                Data.add(toDoLists, Interface.getToDoListData(), Date())
                Interface.removeChildContent(CONTENT)
                Interface.displayLists(Data.get());
            })
        }
        else { 
            Interface.removeChildContent(CONTENT)
        }
    })
}

Mediator()


/* 

toggle form
input data
submit = capture
push to data
build list
edit list > edit data > update lists

*/