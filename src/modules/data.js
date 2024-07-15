export default function Data() {
    const toDoList = []

    const add = (listObj) => {
        toDoList.push(listObj)
        console.table(toDoList)
    }

    const get = () => {
        return toDoList
    }

    return { add, get }
}