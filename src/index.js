
import style from "./style.css"
import DATA from "./modules/data.js"
import INTERFACE from "./modules/interface.js"
import GET_DATE from "./modules/get-date.js"

/* ---------- ---------- ---------- ---------- ---------- */
const Mediator = () => {

    const Interface = INTERFACE()
    const Data = DATA()
    const getDate = GET_DATE()
    const TO_DO = document.getElementById("to-do")
    const NEW_FORM_LOCATION = document.getElementById("new-form-here")

    let toDoLists = []
    const storedToDoLists = Data.get()
    if(storedToDoLists) toDoLists = storedToDoLists

    Interface.displayLists(Data.get(), TO_DO);
    let showForm = true;

    NEW_FORM_LOCATION.appendChild(Interface.toDoList()) 
    
    const _formListener = () => {
        const FORMS = document.querySelectorAll("form")
        FORMS.forEach(form => {
            form["save"].addEventListener("click", () => {
                if(form.id === "new-form") {
                    const newForm = document.getElementById("new-form")
                    Data.add(Interface.getToDoListData(newForm), getDate.formatted())
                    Interface.clearFormValues(newForm)
                    NEW_FORM_LOCATION.style.cssText = "display: none;"
                    Interface.removeChildContent(TO_DO)
                    Interface.displayLists(Data.get(), TO_DO);
                } else {
                //code here...
                console.log("48", form.id);
                const updatedForm = document.getElementById(form.id)
                const idSplit = form.id.split("-")  
                const formIndex = idSplit[1]
                console.log(formIndex);
                Data.update(Interface.getToDoListData(updatedForm), formIndex)
                console.log("AAAAAAAAAAAAAAH");
                //...to here
                }
            })
        })
    }

    _formListener()

    const TOGGLE_NEW_FORM = document.getElementById("toggle-new-form")
    
    TOGGLE_NEW_FORM.addEventListener("click", () => {
        NEW_FORM_LOCATION.style.cssText = NEW_FORM_LOCATION.style.cssText === "display: block;" ? "display: none;" : "display: block;"
        }
    )

}

Mediator()
