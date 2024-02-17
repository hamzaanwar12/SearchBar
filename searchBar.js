let input = document.querySelector("input")
let searchButton = document.getElementsByTagName("button")[0]

console.log(input)
console.log(searchButton)

searchButton.addEventListener("click",()=>{
    input.classList.toggle("showActive")
})