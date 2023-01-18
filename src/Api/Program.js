import {destroy as des, getSingle} from "./Api";
import env from "../../package.json";

const route = "Program";

// export const all = () => get(route);

const url = `http://${env.ipadress}:${env.port}/api/`
const query = "Program"
export const all = (search) => {
    return fetch(url + query + search)
        .then(response => response.json())
        .catch(e => console.log(e))
}

export const getProgram = (id) => getSingle(route, id)
export const destroy = (id) => des(route, id);