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

  const updatePegboard = (removeChildContent) => {
    if (removeChildContent) Interface.removeChildContent(TO_DO_DOM);
    Interface.displayLists(Data.get(), TO_DO_DOM);
    startFormListeners();
  };

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

  const newFormErrorController = (form, input) => {
    form[input].placeholder = `Please enter a valid ${input}`;
    form[input].classList.add("error");
    form[input].addEventListener("change", (change) => {
      console.log(change.target.value);
      if (change.target.value === "") form[input].classList.add("error");
      if (change.target.value !== "") form[input].classList.remove("error");
    });
  };

  //65 + 131 running newFormErrorController twice?
  const validateListInput = (form) => {
    const listData = Interface.getToDoListData(form);
    if (listData.project && listData.title && listData["to-do"])
      return listData;
    if (!listData.project) newFormErrorController(form, "project");
    if (!listData.title) newFormErrorController(form, "title");
    if (!listData["to-do"]) newFormErrorController(form, "to-do");
    return { error: "Invalid content entry" };
  };

  const addList = (listData) => {
    const newForm = document.getElementById("new-form");
    Data.add(listData, getDate.formatted());
    newForm.style.cssText = "display: none;";
  };

  const updateList = (form, listData) => {
    const formIndex = getIndexFromID(form.id);
    Data.update(listData, formIndex);
  };

  const validateAndCreateToDoList = (form) => {
    const validatedListInput = validateListInput(form);
    if (validatedListInput.error) return;

    if (form.id === "new-form") {
      addList(validatedListInput);
    } else {
      updateList(form, validatedListInput);
    }
    createProjectsSidebar(true);
    updatePegboard(true);
  };

  const removeList = (formID) => {
    const index = getIndexFromID(formID);
    Data.remove(index);
    updatePegboard(true);
  };

  const startFormListeners = () => {
    toggleNewFormListener();
    const FORMS = document.querySelectorAll("form");
    FORMS.forEach((form) => {
      form["save"].addEventListener("click", () =>
        validateAndCreateToDoList(form)
      );
      form["remove"].addEventListener("click", () => {
        removeList(form.id);
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
    const newListForm = Interface.toDoList();
    TO_DO_DOM.appendChild(newListForm);
    //65 + 131 running newFormErrorController twice?
    const NEW_FORM = document.getElementById("new-form");
    newFormErrorController(NEW_FORM, "project");
    newFormErrorController(NEW_FORM, "title");
    newFormErrorController(NEW_FORM, "to-do");
    NEW_FORM.style.display = "none";
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
