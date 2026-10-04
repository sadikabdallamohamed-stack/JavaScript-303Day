const myPromise = new Promise(function(resolve, reject) {

    setTimeout(function() {
      reject("Failed to load data.");
    }, 2000);

});

myPromise
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });