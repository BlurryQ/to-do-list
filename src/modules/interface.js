import newForm from "./functions/newForm.js"
import showFormButton from "./functions/showNewForm.js"

export default function Interface () {

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