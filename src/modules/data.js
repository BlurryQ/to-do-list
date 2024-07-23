export default function Data() {

    const add = (list, date) => {
        const toDoLists = get()
        list.created = date
        toDoLists.push(list)
        localStorage.setItem("toDoLists", JSON.stringify(toDoLists));
    }

    const get = () => {
        return JSON.parse(localStorage.getItem("toDoLists"));
    }

    const update = (list, index) => {
        const toDoLists = get()
        console.log("14:", "UPDATE", toDoLists, list, index);
        toDoLists.splice(index, 1, list)
        localStorage.setItem("toDoLists", JSON.stringify(toDoLists))
        console.log(toDoLists);
    }

    return { add, get, update }
}