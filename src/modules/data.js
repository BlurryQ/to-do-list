export default function Data() {
  const get = () => {
    const toDoLists = JSON.parse(localStorage.getItem("toDoLists"));
    return toDoLists ? toDoLists : [];
  };

  const add = (list) => {
    const toDoLists = get();
    list.id = Date.now();
    list["created-date"] = new Date();
    toDoLists.push(list);
    localStorage.setItem("toDoLists", JSON.stringify(toDoLists));
  };

  const update = (list, index) => {
    const toDoLists = get();
    list["created-date"] = toDoLists[index]["created-date"];
    toDoLists.splice(index, 1, list);
    localStorage.setItem("toDoLists", JSON.stringify(toDoLists));
  };

  const remove = (index) => {
    const toDoLists = get();
    toDoLists.splice(index, 1);
    localStorage.setItem("toDoLists", JSON.stringify(toDoLists));
  };

  return { add, get, update, remove };
}
