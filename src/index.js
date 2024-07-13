
import style from "./style.css"
import data from "./list-data.json"
import Interface from "./modules/interface.js"

/* ---------- ---------- DEBUGGING ---------- ---------- */

const debugging = true;

function debug(message) {
    if(debugging) {
        console.log(message);
    }
}

/* ---------- ---------- ---------- ---------- ---------- */

const INTERFACE = Interface()
INTERFACE.formButton()