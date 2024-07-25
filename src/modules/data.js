export default function Data() {

    const add = (list, date) => {
        const toDoLists = get()
        list.created = date
        toDoLists.push(list)
        localStorage.setItem("toDoLists", JSON.stringify(toDoLists));
    }

    const get = () => {
        const toDoLists = JSON.parse(localStorage.getItem("toDoLists"));
        return toDoLists ? toDoLists : []
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