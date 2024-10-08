import formatDate from "../modules/get-date";

export default function Interface() {
  const displayProjects = (projects, CURRENT_PROJECTS) => {
    for (const project of projects) {
      const projectButton = document.createElement("button");
      projectButton.textContent = project;
      projectButton.name = "project";
      CURRENT_PROJECTS.appendChild(projectButton);
    }
    return CURRENT_PROJECTS;
  };

  const toDoList = (toDoList, listIndex) => {
    const form = document.createElement("form");
    const pin = document.createElement("div");
    const projectLabel = document.createElement("label");
    const titleLabel = document.createElement("label");
    const toDoLabel = document.createElement("label");
    const dueDateLabel = document.createElement("label");
    const projectInput = document.createElement("input");
    const titleInput = document.createElement("input");
    const toDoInput = document.createElement("textarea");
    const dueDateInput = document.createElement("input");
    const projectBR = document.createElement("br");
    const titleBR = document.createElement("br");
    const toDoBR = document.createElement("br");
    const dueDateBR = document.createElement("br");
    const save = document.createElement("button");
    const remove = document.createElement("button");

    projectLabel.for = "project";
    projectLabel.textContent = "Project Name:";
    projectInput.type = "text";
    projectInput.placeholder = "Enter project name";

    titleLabel.for = "title";
    titleLabel.textContent = "Title:";
    titleInput.type = "text";
    titleInput.placeholder = "Enter title";

    toDoLabel.for = "to-do";
    toDoLabel.textContent = "To Do:";
    toDoInput.rows = "4";
    toDoInput.columns = "50";
    toDoInput.placeholder = "Enter note here";

    dueDateLabel.for = "due-date";
    dueDateLabel.textContent = "Date due:";
    dueDateInput.type = "date";
    dueDateInput.placeholder = "Enter due date";

    save.textContent = "Save";
    remove.textContent = "Delete";

    save.type = "button";
    remove.type = "button";

    form.setAttribute("id", "new-form");
    pin.setAttribute("class", "pin");
    projectInput.setAttribute("name", "project");
    titleInput.setAttribute("name", "title");
    toDoInput.setAttribute("name", "to-do");
    dueDateInput.setAttribute("name", "due-date");
    save.setAttribute("name", "save");
    remove.setAttribute("name", "remove");

    form.appendChild(pin);
    form.appendChild(projectLabel);
    form.appendChild(projectInput);
    form.appendChild(projectBR);
    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(titleBR);
    form.appendChild(toDoLabel);
    form.appendChild(toDoInput);
    form.appendChild(toDoBR);
    form.appendChild(dueDateLabel);
    form.appendChild(dueDateInput);
    form.appendChild(dueDateBR);

    if (toDoList) {
      projectInput.value = toDoList.project;
      titleInput.value = toDoList.title;
      toDoInput.value = toDoList["to-do"];
      dueDateInput.value = toDoList["due-date"];

      const createdDateLabel = document.createElement("label");
      const createdDateSpan = document.createElement("span");
      const createdDateBR = document.createElement("br");

      createdDateLabel.textContent = "Created Date:";
      createdDateLabel.for = "created-date";

      const _format = (num) => {
        if (num < 10) return "0" + num;
        return num.toString();
      };

      const date = toDoList["created-date"];
      createdDateSpan.textContent = formatDate(date);
      createdDateSpan.setAttribute("class", "created-date");
      createdDateSpan.setAttribute("name", "created-date");

      form.setAttribute("id", "index-" + listIndex);

      form.appendChild(createdDateLabel);
      form.appendChild(createdDateSpan);
      form.appendChild(createdDateBR);
    } else {
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      form.appendChild(p1);
      form.appendChild(p2);
    }

    form.appendChild(save);
    form.appendChild(remove);

    return form;
  };

  const getToDoListData = (HTMLForm) => {
    return {
      project: HTMLForm["project"].value,
      title: HTMLForm["title"].value,
      "to-do": HTMLForm["to-do"].value,
      "due-date": HTMLForm["due-date"].value,
    };
  };

  const removeChildContent = (...parents) => {
    for (const parent of parents) {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    }
  };

  const displayLists = (toDoLists, location) => {
    let listIndex = 0;
    for (const _list of toDoLists) {
      const list = toDoList(_list, listIndex);
      location.appendChild(list);
      listIndex += 1;
    }
  };

  return {
    displayProjects,
    toDoList,
    getToDoListData,
    removeChildContent,
    displayLists,
  };
}
