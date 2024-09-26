import style from "./style.css";
import DATA from "./modules/data.js";
import INTERFACE from "./modules/interface.js";

/* ---------- ---------- ---------- ---------- ---------- */
const controller = () => {
  const Interface = INTERFACE();
  const Data = DATA();

  const TO_DO_DOM = document.getElementById("to-do");
  const CURRENT_PROJECTS_DOM = document.getElementById("current-projects");
  const ALL_PROJECTS_BUTTON = document.getElementById("all-projects");
  let currentData,
    sort = "";

  ALL_PROJECTS_BUTTON.addEventListener("click", () => {
    updatePegboard(true);
  });

  const updatePegboard = (removeChildContent) => {
    if (removeChildContent) Interface.removeChildContent(TO_DO_DOM);
    currentData = Data.get();
    Interface.displayLists(currentData, TO_DO_DOM);
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
        currentData = thisProjectsLists;
        Interface.displayLists(currentData, TO_DO_DOM);
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

  const newFormListener = (form, input) => {
    form[input].placeholder = `Please enter a valid ${input}`;
    form[input].classList.add("error");
    form[input].addEventListener("change", (change) => {
      if (change.target.value === "") form[input].classList.add("error");
      if (change.target.value !== "") form[input].classList.remove("error");
    });
  };

  const validateListInput = (form) => {
    const listData = Interface.getToDoListData(form);
    if (listData.project && listData.title && listData["to-do"])
      return listData;

    if (!listData.project) newFormListener(form, "project");
    if (!listData.title) newFormListener(form, "title");
    if (!listData["to-do"]) newFormListener(form, "to-do");
    return { error: "Invalid content entry" };
  };

  const addList = (listData) => {
    const newForm = document.getElementById("new-form");
    Data.add(listData);
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

  /* tidy up ifs */
  const sortData = (sortBy, data) => {
    const [sort, order] = sortBy.split("_");
    if (sort === "title" && order === "asc") {
      const sortedData = data.sort((a, b) => {
        const titleA = a.title;
        const titleB = b.title;
        return titleA > titleB ? 1 : -1;
      });
      return sortedData;
    }
    if (sort === "title" && order === "desc") {
      const sortedData = data.sort((a, b) => {
        const titleA = a.title;
        const titleB = b.title;
        return titleB > titleA ? 1 : -1;
      });
      return sortedData;
    }
    if (order === "asc") {
      const sortedData = data.sort((a, b) => {
        const dateA = new Date(a[sort]).getTime();
        const dateB = new Date(b[sort]).getTime();
        return dateA - dateB;
      });
      return sortedData;
    }
    if (order === "desc") {
      const sortedData = data.sort((a, b) => {
        const dateA = new Date(a[sort]).getTime();
        const dateB = new Date(b[sort]).getTime();
        return dateB - dateA;
      });
      return sortedData;
    }
  };

  const startSortListener = () => {
    const sortBy = document.getElementById("sort");
    sortBy.addEventListener("change", (event) => {
      sort = event.target.value;
      const sortedData = sortData(sort, currentData);
      console.log("--- Data returned --- ");
      console.log(sortedData);
      Interface.removeChildContent(TO_DO_DOM);
      Interface.displayLists(sortedData, TO_DO_DOM);
      currentData = sortedData;
    });
  };

  const startFormListeners = () => {
    toggleNewForm();
    startSortListener();
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

  const toggleNewForm = () => {
    const newListForm = Interface.toDoList();
    TO_DO_DOM.appendChild(newListForm);
    const NEW_FORM = document.getElementById("new-form");
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

add header explaining what this site is for

add "set as complete"

add priority (posit it colour change?)

check you can edit from within projects

create hamburger for projects [projectName] - selector (framework?)

shrink list card (double columns for dates and save/delete)

filters not working properly



*/
