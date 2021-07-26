/* ######################################
    Template Literals, a.k.a. "Template Strings"
   ###################################### */

let authorName = "Luminita Miller"
let authorBioText = "She keeps bees. Oh, and writes books about bees."

// The old way:
let authorBioHTML1 = "\
    <article>\
        <h1>" + authorName  + "</h1>\
        \
        " + authorBioText + "\
    </article>\
"

// The new way, with template strings and string interpolation/"injection"
let authorBioHTML2 = `
    <article>
        <h1>${authorName}</h1>

        ${authorBioText}
    </article>
`

console.log(authorBioHTML2)


/* ######################################
    parseInt() vs parseFloat() vs Number()
   ###################################### */

let integerString = "45"
let decimalString = "45.314"
let integer = parseInt(integerString)
let decimal1 = parseFloat(decimalString)
let decimal2 = Number(decimalString)
let stringStartingWithInteger = parseInt("12 apples")
let stringStartingWithDecimal = parseFloat("12.34 apples")

console.log({ "Integer as a String": integerString })
console.log({ "Integer as a Number": integer })
console.log({ "Decimal as a Number": decimal1 })
console.log({ "Decimal as a Number": decimal2 })
console.log({ stringStartingWithInteger })
console.log({ stringStartingWithDecimal })


/* ######################################
    What is scope?
   ###################################### */

let n = 3
function add (x, y) {
    let n = 567
    console.log({ n })
    return x + y
}
add(4, 5)

console.log({ n })

    
let veggie = "potato"
let count = Infinity

function multiply (x, y) {
    let product = 0
    for (let count = 0; count < y; count += 1) {
        if (x < 0 || y < 0) {
            let whatever = "haha"
            console.log(whatever)
            console.log(count)
            console.log(product)
            console.log(veggie)
            console.log(x, y)
        } 
        product += x
    }
    return product
}

multiply(3, 6)