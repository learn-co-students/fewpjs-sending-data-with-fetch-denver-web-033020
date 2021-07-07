// let formData = {
//     dogName:  "Ranger",
//     dogBreed: "Heeler Mix"
// };

// let configObj = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
// }

// fetch("http://localhost:3000/dogs", configObj) 
//     .then(response => response.json())
//     .then(console.log)
//     .catch(error => {
//         alert("Bad things! Ragnarok!");
//         console.log(error.message);
//     })

function submitData(name, email) {
    fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
        .then(response => response.json())
        .then(displayData)
        .catch(error => {
            alert("something is not right");
            errorMessage(error)
        })
        // return fetch("localhost:3000/users")
}

function displayData(user) {
    let h2 = document.createElement("h2")
    let h1 = document.createElement("h1")
    h1.innerText = `${user.name}   ${user.email}`
    h2.innerText = `${user.id}`
    document.body.appendChild(h1)
    document.body.appendChild(h2)
}

function errorMessage(error) {
    let h1 = document.createElement("h1")
    h1.innerText = `${error.message}`
    document.body.append(h1)
}