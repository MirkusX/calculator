//lage basic html
//input

//js for kalkulator
//funksjon som tar tallene du trykker inn på kalkulator og legger de inn i et variabel så i display
//display.textcontent = variabel

//funksjon som + * / - variablene i display
//variabel +-/* variabel (DUHHHHHHH)

//funksjon som sletter alt i display
//display.textcontent = ""

//funksjon som sletter et tall fra display
//aner ikke hvordan enda

//----------------------------------------------------------------
//style css

//lage prefer color scheme i javascript
//aner ikke har ikke gjort det før

//dø

//alle knappene og html elementer
let display = document.querySelector("#display")
const numbers1 = document.querySelector("#number-1")
const numbers2 = document.querySelector("#number-2")
const numbers3 = document.querySelector("#number-3")
const numbers4 = document.querySelector("#number-4")
const numbers5 = document.querySelector("#number-5")
const numbers6 = document.querySelector("#number-6")
const numbers7 = document.querySelector("#number-7")
const numbers8 = document.querySelector("#number-8")
const numbers9 = document.querySelector("#number-9")
const numbers0 = document.querySelector("#number-0")
const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")
const division = document.querySelector("#division")
const sum = document.querySelector("#sum")
const times = document.querySelector("#times")
const clearAll = document.querySelector("#clear-all")
const clear = document.querySelector("#clear")
const dot = document.querySelector("#dot")
let result = ""
display.value = ""

//math operations
//funksjoner som legger inn +-/* og gjør at = funksjon fungerer
plus.addEventListener("click", function(){
    display.value += "+"
})

minus.addEventListener("click", function(){
    display.value += "-"
})

division.addEventListener("click",function(){
    display.value += "/"
})

times.addEventListener("click", function(){
    display.value += "*"
})
//legger sammen alt i display og gjør det om til løsningen
sum.addEventListener("click", function(){
   display.value = Function("return " + display.value)()
})



//clear functions
//funksjon som sletter alt fra display
clearAll.addEventListener("click", function(){
    display.value = ""
})
//funksjon som sletter et symbol fra display
clear.addEventListener("click", function(){
    display.value = display.value.slice(0, -1)
})

//number input
//alle funksjoner som legger inn nummer og symboler som ikke er +-/*
dot.addEventListener("click", function(){
    display.value += "."
})

numbers1.addEventListener("click", function(){
    display.value += 1
    console.log(numbers1.value)
})

numbers2.addEventListener("click", function(){
    display.value += 2
})

numbers3.addEventListener("click", function(){
    display.value += 3
})

numbers4.addEventListener("click", function(){
    display.value += 4
})

numbers5.addEventListener("click", function(){
    display.value += 5
})

numbers6.addEventListener("click", function(){
    display.value += 6
})

numbers7.addEventListener("click", function(){
    display.value += 7
})

numbers8.addEventListener("click", function(){
    display.value += 8
})

numbers9.addEventListener("click", function(){
    display.value += 9
})

numbers0.addEventListener("click", function(){
    display.value += 0
})

