
import style from "./style.css"
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

    console.log(24, "Get data here: ", Data.get()[1]);

    FORM_BUTTON.addEventListener("click", () => {
        showForm = !showForm
        if(showForm) { 
            CONTENT.appendChild(Interface.newForm()) 
            const submitButton = document.getElementById("submit")
            submitButton.addEventListener("click", () => {
                showForm = !showForm

                //NEW FUNCTION HERE
                const updatedData = Interface.getToDoListData()
                console.table(34, "updatedData:", updatedData);
                /* 
                Data.add(toDoLists, Interface.getToDoListData(), Date())
                 */
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


Interface.makeToDoLists > Interface.saveChanges > Data.Update
make inputs             > Listen to save button > Update data 
*/