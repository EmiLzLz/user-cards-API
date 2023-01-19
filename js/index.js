fetch( "https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => showUsers(data))
    .catch((error) => console.error(error))

const showUsers = data => {
    console.log(data)

    function showInfo(){
        for(let i = 0; i < data.length; i++){
            document.getElementsByClassName("user-info")[i].innerHTML += `
                <div class="followers d-flex align-items-baseline justify-content-center gap-3 pb-2">
                    <h2 class="m-0 text-center">${data[i].username}</h2>
                    <p class="m-0 total"> 20.604 followers</p>
                </div>
                <p class="m-0 text-start about">Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore</p>
            `

            document.getElementsByClassName("aditional-info")[i].innerHTML += `
                <h3 class="m-0 fw-bold text-center pb-4">${data[i].name}</h3>
                <p class="m-0">email: ${data[i].email}</p>
                <p class="m-0">website: <a href="#" class="m-0 text-decoration-none fst-italic">${data[i].website}</a></p>
                <button>Follow</button>
            `
        }
    }

    showInfo()
}



