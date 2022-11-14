// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

let player = {
    name: "Arjun",
    age: 17,
    country: "Poland"
}

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

function logData() {
    let str = player.name + " is " + player.age + " years old and lives in " + player.country
    
    console.log(str)
}

// Call the logData() function to verify that it works

logData()