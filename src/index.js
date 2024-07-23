
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

    let toDoLists = []
    const storedToDoLists = Data.get()
    if(storedToDoLists) toDoLists = storedToDoLists

    Interface.displayLists(Data.get(), TO_DO);
    let showForm = true;

    //showForm = newfunc()

    /* insert function for returning id of lits to update */
/*     const UPDATE = document.querySelectorAll("form")
    UPDATE.forEach(list => {
        
            list["save"].addEventListener("click", () => {
        
        console.log("48", list.className);
        console.log("AAAAAAAAAAAAAAH");
        //UPDATE FUNCTION HERE
        //const updatedData = Interface.getToDoListData(>index<)
        
        //END HERE

        Interface.removeChildContent(TO_DO)
        Interface.displayLists(Data.get(), TO_DO);
        _formListener()
    })
}) */

    const _formListener = (showForm) => {
        const FORMS = document.querySelectorAll("form")
        FORMS.forEach(form => {
            form["save"].addEventListener("click", () => {
                console.log("---", form.id);
                if(form.id === "new-form") {
                    if(showForm) {
                        console.log("NEWFORMHERE");
                        !showForm
                        //Data.add(toDoLists, Interface.getToDoListData(NEW_FORM), getDate.formatted())
                        NEW_FORM_LOCATION.style.cssText = "display: none;"
                        Interface.removeChildContent(TO_DO)
                        Interface.displayLists(Data.get(), TO_DO);
                        console.log("WORKING");
                        return !showForm
                    }
                } else {
                //code here...
                console.log("48", form.className);
                console.log("AAAAAAAAAAAAAAH");
                //...to here
                }
            })
        })
    }

    const NEW_FORM_LOCATION = document.getElementById("new-form-here")
    NEW_FORM_LOCATION.appendChild(Interface.toDoList()) 

    showForm = _formListener(showForm)

/*     const toggleNewForm = (showForm) => {
        if(showForm) { 
                Interface.showNewForm
                _formListener()


                const NEW_FORM = document.getElementById("new-form")
                NEW_FORM["save"].addEventListener("click", () => {
                    showForm = !showForm
                    //Data.add(toDoLists, Interface.getToDoListData(NEW_FORM), getDate.formatted())
                    Interface.removeChildContent(NEW_FORM, TO_DO)
                    Interface.displayLists(Data.get(), TO_DO);
                    console.log("WORKING");

                })
            }
            else { 
                Interface.removeChildContent(NEW_FORM_LOCATION)
            }
        return !showForm
    } */


    const TOGGLE_NEW_FORM = document.getElementById("toggle-new-form")
    
    TOGGLE_NEW_FORM.addEventListener("click", () => {
        NEW_FORM_LOCATION.style.cssText = NEW_FORM_LOCATION.style.cssText === "display: block;" ? "display: none;" : "display: block;"
        }
    )

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