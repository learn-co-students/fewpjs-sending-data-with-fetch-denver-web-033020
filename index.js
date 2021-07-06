// Add your code here


// <form action="http://localhost:3000/dogs" method="POST">
// <label> Dog Name: <input type="text" name="dogName" id="dogName" /></label><br />
// <label> Dog Breed: <input type="text" name="dogBreed" id="dogBreed" /></label><br />
// <input type="submit" name="submit" id="submit" value="Submit" />
// </form>


function submitData(userName, userEmail) {
    let configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })

    };

    return fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
            return response.json();
        })
        .then(function(object){
            document.body.innerHTML = object["id"]
        })
        .catch(function (error) {
            document.body.innerHTML = error.message
        })
}

