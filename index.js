// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(cat) {
    cats.push(cat)
}

function destructivelyPrependCat(cat) {
    cats.unshift(cat)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(cat) {
    let cats2 = Array.from(cats)
    cats2.push(cat)
    return cats2
}

function prependCat(cat) {
    let cats2 = Array.from(cats)
    cats2.unshift(cat)
    return cats2
}

function removeLastCat() {
    let cats2 = Array.from(cats)
    cats2.pop()
    return cats2
}

function removeFirstCat() {
    let cats2 = Array.from(cats)
    cats2.shift()
    return cats2
}