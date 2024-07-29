
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

    const _addToDoList = () => {
        const newForm = document.getElementById("new-form")
        Data.add(Interface.getToDoListData(newForm), getDate.formatted())
        Interface.clearFormValues(newForm)
        newForm.style.cssText = "display: none;" 
    }

    const _updateToDoList = (formID) => {
        const updatedForm = document.getElementById(formID)
        const formIndex = _getIndexFromID(formID)
        Data.update(Interface.getToDoListData(updatedForm), formIndex)
    }

    const _removeToDoList = (formID) => {
        const index = _getIndexFromID(formID)
        Data.remove(index)
        _updatePegboard()
    }
    
    const _startFormListener = () => {
        _toggleNewFormListener()
        const FORMS = document.querySelectorAll("form")
        FORMS.forEach(form => {
            form["save"].addEventListener("click", () => {
                form.id === "new-form" ? _addToDoList() : _updateToDoList(form.id)
                _updatePegboard()
            })
            form["remove"].addEventListener("click", () => {
                _removeToDoList(form.id)
            })
        })
    }
    
    const _toggleNewFormListener = () => {
        TO_DO.appendChild(Interface.toDoList()) 
        const NEW_FORM = document.getElementById("new-form")
        NEW_FORM.style.cssText = "display: none;"
        const TOGGLE_NEW_FORM = document.getElementById("toggle-new-form")
        TOGGLE_NEW_FORM.addEventListener("click", () => NEW_FORM.style.cssText = NEW_FORM.style.cssText === "display: flex;" ? "display: none;" : "display: flex;"
        )
    }

    const _getIndexFromID = (formID) => {
        //formID = `index-${array index}`
        const splitID = formID.split("-")  
        return splitID[1]   
    }

    const _updatePegboard = () => {
        Interface.removeChildContent(TO_DO)
        Interface.displayLists(Data.get(), TO_DO);
        _startFormListener()
    }

    Interface.displayLists(Data.get(), TO_DO);
    _startFormListener()


}

Mediator()
