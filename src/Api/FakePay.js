export default function Pay(amount) {
    console.log("Pay Amount")
    console.log(amount)

    fetch('https://fakepay.azurewebsites.net/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: new URLSearchParams({
            'amount': 15,
            'reference': 54545454123545,
            'url': 'http://localhost:5086/api/misc/setPayment'
        })
    })
    .then((response) => response.text())
    .then((html) => {
        document.getElementById("payPopUp").innerHTML = html;
    })
    .then(() => {document.getElementById('succes').value = true;})
    .catch((error) => {
        console.warn(error);
    });


    // .then(response => {
    //   var html = response.text();
    //   const parser = new DOMParser();
    //   var html2 = parser.parseFromString(html, "text/html");
    //   document.getElementById("payPopUp").innerHTML = html2;
    //   console.log(html2)
    //   console.log(response.body)
    //     // window.location.href = response.url
    // })
    // .then((body) => {
    //   const reader = body.getReader();
    //   console.log(reader)
    //   // …
    // });
    // .then(response => response.json())
    // .then(response => console.log(JSON.stringify(response)))
}