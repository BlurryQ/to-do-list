export default function Data() {

    const add = (toDoLists, list, date) => {
        list.created = date
        toDoLists.push(list)
        localStorage.setItem("toDoLists", JSON.stringify(toDoLists));
    }

    const get = () => {
        return JSON.parse(localStorage.getItem("toDoLists"));
    }

    const update = (toDoLists, list, index) => {
        console.log("14:", "UPDATE", toDoLists, list, index);
    }

    return { add, get, update }
}