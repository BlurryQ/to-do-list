
import style from "./style.css"
import data from "./list-data.json"
import newForm from "./modules/newForm.js"
import showFormButton from "./modules/showNewForm.js"

/* ---------- ---------- DEBUGGING ---------- ---------- */

const debugging = true;

function debug(message) {
    if(debugging) {
        console.log(message);
    }
}

/* ---------- ---------- ---------- ---------- ---------- */

function Interface () {

    const formButton = () => {
        const CONTENT = document.getElementById("content")
        const FORM_BUTTON = document.getElementById("form-button")

        let showForm = false;

        FORM_BUTTON.addEventListener("click", () => {
            showForm = !showForm
            if(showForm) { 
                CONTENT.appendChild(newForm()) 
                const submitButton = document.getElementById("submit")
                submitButton.addEventListener("click", () => {
                    debug("clicked submit")
                    //do something with data

                    //clear date fields

                    //close form
                    _removeChildContent(CONTENT)
                })
            }
            else { 
                _removeChildContent(CONTENT)
            }
        })
    }

    const _removeChildContent = (parent) => {
        while(parent.firstChild) {
            parent.removeChild(parent.firstChild)
        }
    }
    
    return { formButton }
}

const INTERFACE = Interface()
INTERFACE.formButton()