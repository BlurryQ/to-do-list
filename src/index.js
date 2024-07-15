
import style from "./style.css"
/* import DATA from "./list-data.json" */
import DATA from "./modules/data.js"
import INTERFACE from "./modules/interface.js"

/* ---------- ---------- DEBUGGING ---------- ---------- */

const debugging = true;

function debug(message) {
    if(debugging) {
        console.log(message);
    }
}

/* ---------- ---------- ---------- ---------- ---------- */
const Mediator = () => {

    const Interface = INTERFACE()
    const Data = DATA()
    const CONTENT = document.getElementById("content")
    const FORM_BUTTON = document.getElementById("form-button")

    let showForm = false;

    FORM_BUTTON.addEventListener("click", () => {
        showForm = !showForm
        if(showForm) { 
            CONTENT.appendChild(Interface.newForm()) 
            const submitButton = document.getElementById("submit")
            submitButton.addEventListener("click", () => {
                debug("clicked submit")
                showForm = !showForm
                //do something with data

                //clear date fields
                Data.add(Interface.getToDoListData())
                debug(Data.get())
                //close form
                Interface.removeChildContent(CONTENT)
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