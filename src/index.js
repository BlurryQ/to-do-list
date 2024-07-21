
import style from "./style.css"
import DATA from "./modules/data.js"
import INTERFACE from "./modules/interface.js"
import GET_DATE from "./modules/get-date.js"

/* ---------- ---------- ---------- ---------- ---------- */
const Mediator = () => {

    const Interface = INTERFACE()
    const Data = DATA()
    const getDate = GET_DATE()
    const TOGGLE_NEW_FORM = document.getElementById("toggle-new-form")
    const NEW_FORM = document.getElementById("new-form-here")
    const TO_DO = document.getElementById("to-do")

    let toDoLists = []
    const storedToDoLists = Data.get()
    if(storedToDoLists) toDoLists = storedToDoLists

    Interface.displayLists(Data.get(), TO_DO);
    let showForm = false;

    TOGGLE_NEW_FORM.addEventListener("click", () => {
        showForm = !showForm
        if(showForm) { 
            NEW_FORM.appendChild(Interface.toDoList()) 
            const SAVE = document.getElementById("save")
            SAVE.addEventListener("click", () => {
                showForm = !showForm
                Data.add(toDoLists, Interface.getToDoListData(), getDate.formatted())
                Interface.removeChildContent(NEW_FORM, TO_DO)
                Interface.displayLists(Data.get(), TO_DO);
            })
        }
        else { 
            Interface.removeChildContent(NEW_FORM)
        }
    })

    /* insert function for returning id of lits to update */
    const UPDATE = document.querySelectorAll("button")
    UPDATE.forEach(list => {
        console.log("53", list.className);

        if(list.value === "save")
        list.addEventListener("click", () => {

            console.log("AAAAAAAAAAAAAAH");
        //UPDATE FUNCTION HERE
        //const updatedData = Interface.getToDoListData()

        //END HERE

        Interface.removeChildContent(TO_DO)
        Interface.displayLists(Data.get(), TO_DO);
    })
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


Interface.makeToDoLists > Interface.saveChanges > Data.Update
make inputs             > Listen to save button > Update data 
*/


/* press save pushes index
if no index add, else update */