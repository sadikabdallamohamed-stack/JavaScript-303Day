let users = [
    {
        name: "Sadik",
        age: 25,
        country: "Kenya"
    },
    {
        name: "Ahmed",
        age: 22,
        country: "Somalia"
    },
    {
        name: "Amina",
        age: 24,
        country: "Kenya"
    }
];

let saveButton = document.getElementById("saveButton");
let message = document.getElementById("message");

saveButton.addEventListener("click", function() {

    let usersJSON = JSON.stringify(users);

    localStorage.setItem("users", usersJSON);

    let savedUsersJSON = localStorage.getItem("users");

    let savedUsers = JSON.parse(savedUsersJSON);

    message.textContent = `Users loaded: ${savedUsers.length}`;
});