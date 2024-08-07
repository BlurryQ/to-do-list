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
    const projects = projectsToDisplay();
    Interface.displayProjects(projects, CURRENT_PROJECTS_DOM);

    const projectButtons = document.querySelectorAll('[name="project"]');
    projectButtons.forEach((project) => {
      project.addEventListener("click", () => {
        Interface.removeChildContent(TO_DO_DOM);

        const projectLists = getProjectLists(project.textContent);
        Interface.displayLists(projectLists, TO_DO_DOM);
      });
    });
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

  const getProjectLists = (projectName) => {
    return Data.get().filter((list) => list.project === projectName);
  };

  const addToDoList = () => {
    const newForm = document.getElementById("new-form");
    Data.add(Interface.getToDoListData(newForm), getDate.formatted());
    Interface.clearFormValues(newForm);
    newForm.style.cssText = "display: none;";
  };

  const updateToDoList = (formID) => {
    const updatedForm = document.getElementById(formID);
    const formIndex = getIndexFromID(formID);
    Data.update(Interface.getToDoListData(updatedForm), formIndex);
  };

  const removeToDoList = (formID) => {
    const index = getIndexFromID(formID);
    Data.remove(index);
    updatePegboard(true);
  };

  const startFormListener = () => {
    toggleNewFormListener();
    const FORMS = document.querySelectorAll("form");
    FORMS.forEach((form) => {
      form["save"].addEventListener("click", () => {
        form.id === "new-form" ? addToDoList() : updateToDoList(form.id);
        createProjectsSidebar(true);
        updatePegboard(true);
      });
      form["remove"].addEventListener("click", () => {
        removeToDoList(form.id);
        createProjectsSidebar(true);
      });
    });
  };

  const toggleNewFormListener = () => {
    TO_DO_DOM.appendChild(Interface.toDoList());
    const NEW_FORM = document.getElementById("new-form");
    NEW_FORM.style.cssText = "display: none;";
    const TOGGLE_NEW_FORM = document.getElementById("toggle-new-form");
    TOGGLE_NEW_FORM.addEventListener(
      "click",
      () =>
        (NEW_FORM.style.cssText =
          NEW_FORM.style.cssText === "display: flex;"
            ? "display: none;"
            : "display: flex;")
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
    startFormListener();
  };

  createProjectsSidebar(false);
  updatePegboard(false);
};

controller();

//add empty form error
