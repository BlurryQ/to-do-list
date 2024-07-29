export default function Data() {
    
    const get = () => {
        const toDoLists = JSON.parse(localStorage.getItem("toDoLists"));
        return toDoLists ? toDoLists : []
    }

    const add = (list, date) => {
        const toDoLists = get()
        list.created = date
        toDoLists.push(list)
        localStorage.setItem("toDoLists", JSON.stringify(toDoLists));
    }

    const update = (list, index) => {
        const toDoLists = get()
        list.created = toDoLists[index].created
        toDoLists.splice(index, 1, list)
        localStorage.setItem("toDoLists", JSON.stringify(toDoLists))
    }

    const remove = (index) => {
        const toDoLists = get()
        toDoLists.splice(index, 1)
        localStorage.setItem("toDoLists", JSON.stringify(toDoLists))
    }

    return { add, get, update, remove }
}