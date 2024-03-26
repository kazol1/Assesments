const cardContainer = document.getElementById("card-container");

const handleErrors = async (response) => {
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response;
};
const createUser = (user) => {
    const card = document.createElement("div");
    card.classList.add("user-card");
    card.id = `user-${user.id}`;

    const name = document.createElement("h2");
    name.textContent = user.name;

    const username = document.createElement("p");
    username.textContent = `Username: ${user.username}`;

    const email = document.createElement("p");
    email.textContent = `Email: ${user.email}`;

    const address = document.createElement("p");
    address.textContent = `Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;

    card.appendChild(name);
    card.appendChild(username);
    card.appendChild(email);
    card.appendChild(address);

    cardContainer.appendChild(card);
};
const fetchUsers = async () => {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        await handleErrors(response);
        const users = await response.json();
        users.forEach((user) => {
            createUser(user);
        });
    } catch (error) {
        console.error(error);
    }
};
document.addEventListener("DOMContentLoaded", fetchUsers);
