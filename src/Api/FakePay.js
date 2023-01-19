export default function Pay(amount) {
    window.location.
    fetch('https://fakepay.azurewebsites.net/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: new URLSearchParams({
            'amount': amount,
            'reference': 14524325236,
            'url': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
        })
    })
    .then(response => {console.log(response)
        // window.location.href = response.url
    })
    // .then(response => response.json())
    // .then(response => console.log(JSON.stringify(response)))
}