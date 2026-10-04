async function getUser() {

    try {

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users/2"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch user data.");
        }

        let data = await response.json();

        console.log(`Name: ${data.name}`);
        console.log(`Email: ${data.email}`);
        console.log(`City: ${data.address.city}`);

    } catch (error) {

        console.log("Error:", error.message);

    }

}

getUser();