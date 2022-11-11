// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let savedCount = count + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.innerText += savedCount
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
}


