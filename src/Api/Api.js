import env from "../../package.json";
import data from "bootstrap/js/src/dom/data";

const url = `http://${env.ipadress}:${env.port}/api/`
export async function get(query) {
    return fetch(`${url}${query}`)
        .then(response => response.json())
        .then(data => data)
        .catch(e => {
            console.log(e);
        })
}

export async function getSingle(query, id) {
    return fetch(`${url}${query}/${id}`)
        .then(response => response.json())
        .then(data => data)
        .catch(e => {
            console.log(e);
        })
}

async function post(query, data) {
    return fetch(`${url}${query}`, {
        Headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data)
    }).then(response => response.json())
}
async function put(query, id, data) {
    return fetch(`${url}${query}/${id}`, {
        Headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        },
        method: "PUT",
        body: JSON.stringify(data)
    }).then(response => response.json())
}
export async function destroy(query, id) {
    return fetch(`${url}${query}/${id}`, {
        Headers: {
        },
        method: "DELETE",
    })

}