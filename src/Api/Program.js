import {destroy as des, getSingle} from "./Api";

const route = "Program";

// export const all = () => get(route);

const url = process.env.REACT_APP_BACKEND_URL
const query = "Program"
export const all = (search) => {
    return fetch(`${url}/${query}${search}`)
        .then(response => response.json())
        .catch(e => console.log(e))
}

export const getProgram = (id) => getSingle(route, id)
export const destroy = (id) => des(route, id);