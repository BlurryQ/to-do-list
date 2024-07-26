
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
    Interface.displayLists(Data.get(), TO_DO);
    
    const NEW_FORM_LOCATION = document.getElementById("new-form-here")
    TO_DO.appendChild(Interface.toDoList()) 
    const NEW_FORM = document.getElementById("new-form")

    const TOGGLE_NEW_FORM = document.getElementById("toggle-new-form")
    TOGGLE_NEW_FORM.addEventListener("click", () => {
        NEW_FORM.style.cssText = NEW_FORM.style.cssText === "display: flex;" ? "display: none;" : "display: flex;"
        }
    )
    
    const _formListener = () => {
        const FORMS = document.querySelectorAll("form")
        FORMS.forEach(form => {
            form["save"].addEventListener("click", () => {
                if(form.id === "new-form") {
                    const newForm = document.getElementById("new-form")
                    Data.add(Interface.getToDoListData(newForm), getDate.formatted())
                    Interface.clearFormValues(newForm)
                    NEW_FORM.style.cssText = "display: none;"
                } else {
                    const updatedForm = document.getElementById(form.id)
                    const formIndex = _getIndexFromID(form.id)
                    Data.update(Interface.getToDoListData(updatedForm), formIndex)
                }
                Interface.removeChildContent(TO_DO)
                Interface.displayLists(Data.get(), TO_DO);
                _formListener
            })
        })
    }

    const _getIndexFromID = (formID) => {
        //formID = `index-${array index}`
        const splitID = formID.split("-")  
        return splitID[1]   
    }

    _formListener()

}

Mediator()
