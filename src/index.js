import style from "./style.css";
import DATA from "./modules/data.js";
import INTERFACE from "./modules/interface.js";
import GET_DATE from "./modules/get-date.js";

/* ---------- ---------- ---------- ---------- ---------- */
const controller = () => {
  const Interface = INTERFACE();
  const Data = DATA();
  const getDate = GET_DATE();
  const TO_DO_DOM = document.getElementById("to-do");
  const CURRENT_PROJECTS_DOM = document.getElementById("current-projects");
  const ALL_PROJECTS_BUTTON = document.getElementById("all-projects");

  ALL_PROJECTS_BUTTON.addEventListener("click", () => {
    updatePegboard(true);
  });

  const createProjectsSidebar = (removeChildContent) => {
    if (removeChildContent) Interface.removeChildContent(CURRENT_PROJECTS_DOM);
    Interface.displayProjects(projectsToDisplay(), CURRENT_PROJECTS_DOM);

    const projectButtons = document.querySelectorAll('[name="project"]');
    projectButtons.forEach((project) => {
      project.addEventListener("click", () => {
        Interface.removeChildContent(TO_DO_DOM);
        const projectName = project.textContent;
        const thisProjectsLists = getProjectLists(projectName);
        Interface.displayLists(thisProjectsLists, TO_DO_DOM);
      });
    });
  };

  const getProjectLists = (projectName) => {
    return Data.get().filter((list) => projectName === list.project);
  };

  const projectsToDisplay = () => {
    const toDoLists = Data.get();
    const allProjects = [];
    for (const list in toDoLists) {
      const projectName = toDoLists[list].project;
      if (!allProjects.includes(projectName)) allProjects.push(projectName);
      continue;
    }
    return allProjects;
  };

  const validateToDoListInput = (form) => {
    const listData = Interface.getToDoListData(form);
    if (listData.project && listData.title && listData["to-do"])
      return listData;

    //create error function, passing field to error
    if (!listData.project) {
      form["project"].placeholder = "ENTER A VALID PROJECT HERE";
      form["project"].style.cssText = "border: 2px solid red;";
    }

    if (!listData.title) {
      form["title"].placeholder = "ENTER A VALID TITLE HERE";
      form["title"].style.cssText = "border: 2px solid red;";
    }

    if (!listData["to-do"]) {
      form["to-do"].placeholder = "ENTER VALID CONTENT HERE";
      form["to-do"].style.cssText = "border: 2px solid red;";
    }

    return { error: "Invalid content entry" };
  };

  const addToDoList = (listData) => {
    const newForm = document.getElementById("new-form");
    Data.add(listData, getDate.formatted());
    newForm.style.cssText = "display: none;";
  };

  const updateToDoList = (form, listData) => {
    const formIndex = getIndexFromID(form.id);
    Data.update(listData, formIndex);
  };

  const removeToDoList = (formID) => {
    const index = getIndexFromID(formID);
    Data.remove(index);
    updatePegboard(true);
  };

  const startFormListeners = () => {
    toggleNewFormListener();
    const FORMS = document.querySelectorAll("form");
    FORMS.forEach((form) => {
      form["save"].addEventListener("click", () => {
        const validatedListInput = validateToDoListInput(form);
        if (validatedListInput.error) return; //can we stop this earlier?

        if (form.id === "new-form") {
          addToDoList(validatedListInput);
        } else {
          updateToDoList(form, validatedListInput);
        }
        createProjectsSidebar(true);
        updatePegboard(true);
      });
      form["remove"].addEventListener("click", () => {
        removeToDoList(form.id);
        createProjectsSidebar(true);
      });
    });
  };

  const toggleListDisplay = (form) => {
    if (form.style.cssText === "display: flex;") {
      form.style.cssText = "display: none;";
    } else {
      form.style.cssText = "display: flex;";
    }
  };

  const toggleNewFormListener = () => {
    const newToDoListForm = Interface.toDoList();
    TO_DO_DOM.appendChild(newToDoListForm);
    const NEW_FORM = document.getElementById("new-form");
    NEW_FORM.style.cssText = "display: none;";
    const TOGGLE_NEW_FORM = document.getElementById("toggle-new-form");
    TOGGLE_NEW_FORM.addEventListener("click", () =>
      toggleListDisplay(NEW_FORM)
    );
  };

  const getIndexFromID = (formID) => {
    //formID = `index-${array index}`
    const splitID = formID.split("-");
    return splitID[1];
  };

  const updatePegboard = (removeChildContent) => {
    if (removeChildContent) Interface.removeChildContent(TO_DO_DOM);
    Interface.displayLists(Data.get(), TO_DO_DOM);
    startFormListeners();
  };

  createProjectsSidebar(false);
  updatePegboard(false);
};

controller();

/* 

error function

top bar for sort and light/dark mode

  sort by due date, created date or reverse creation date

checklist or string

*/
