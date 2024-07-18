export default function Data() {

    const add = (toDoLists, listObj, date) => {
        listObj.created = date
        toDoLists.push(listObj)
        localStorage.setItem("toDoLists", JSON.stringify(toDoLists));
    }

    const get = () => {
        return JSON.parse(localStorage.getItem("toDoLists"));
    }

    return { add, get }
}