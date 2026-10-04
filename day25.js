function getUser() {
    return new Promise(function(resolve, reject) {

        setTimeout(function() {

            let user = {
    name: "Ahmed",
    age: 22,
    country: "Somalia"
};

            resolve(user);

        }, 2000);

    });
}

async function loadData() {

    try {
        let user = await getUser();

        console.log("User loaded!");
        console.log(`Name: ${user.name}`);
        console.log(`Age: ${user.age}`);
        console.log(`Country: ${user.country}`);

    } catch (error) {
        console.log("Error:", error);

    } finally {
        console.log("Finished loading.");
    }
}

loadData();