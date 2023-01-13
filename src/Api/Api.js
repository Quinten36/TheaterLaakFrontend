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
async function post(query, data) {
    return fetch(`${url}${query}`, {
        headers: {
            'X-CSRF-TOKEN': 'meta[name="csrf-token"]',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data)
    }).then(response => response.json())
}
async function put(query, id, data) {
    return fetch(`${url}${query}/${id}`, {
        headers: {
            'X-CSRF-TOKEN': 'meta[name="csrf-token"]',
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        },
        method: "PUT",
        body: JSON.stringify(data)
    }).then(response => response.json())
}
export async function destroy(query, id) {
    return fetch(`${url}${query}/${id}`, {
        headers: {
            'X-CSRF-TOKEN': 'meta[name="csrf-token"]',
        },
        method: "DELETE",
    })

}
