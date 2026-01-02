const inputEl = document.getElementById("type-el")
const btnEl = document.getElementById("btn-el")
const ulEl = document.getElementById("ul-el")
let myleads = []

btnEl.addEventListener("click", function() {
    myleads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myleads.length; i++) {
        listItems += "<li>" + myleads[i] + "</li>"
    }
    ulEl.innerHTML = listItems
}
