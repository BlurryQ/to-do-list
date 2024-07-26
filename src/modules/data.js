export default function Data() {

    const add = (list, date) => {
        console.log("--- ADDING ---");
        const toDoLists = get()
        list.created = date
        toDoLists.push(list)
        localStorage.setItem("toDoLists", JSON.stringify(toDoLists));
    }

    const get = () => {
        console.log("--- GETTING ---");
        const toDoLists = JSON.parse(localStorage.getItem("toDoLists"));
        return toDoLists ? toDoLists : []
    }

    const update = (list, index) => {
        const toDoLists = get()
        console.log("--- UPDATING ---");
        toDoLists.splice(index, 1, list)
        localStorage.setItem("toDoLists", JSON.stringify(toDoLists))
    }

    return { add, get, update }
}