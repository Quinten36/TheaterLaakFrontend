export default class Api {
    constructor(url) {
        this.url = url
    };

    async get(query) {
        return fetch(`${this.url}${query}`)
            .then(response => response.json())
    }

    async post(query, data) {
        return fetch(`${this.url}${query}`, {
            headers: {
                'X-CSRF-TOKEN': 'meta[name="csrf-token"]',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(data => {
                return data
            })
    }

    async put(query, id, data) {
        return fetch(`${this.url}${query}/${id}`, {
            headers: {
                'X-CSRF-TOKEN': 'meta[name="csrf-token"]',
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            },
            method: "PUT",
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(data => {
                return data
            });

    }

    async delete(query, id) {
        return fetch(`${this.url}${query}/${id}`, {
            headers: {
                'X-CSRF-TOKEN': 'meta[name="csrf-token"]',
            },
            method: "DELETE",
        }).then(response => response.json)
            .then(data => {
                return data
            })

    }
}
