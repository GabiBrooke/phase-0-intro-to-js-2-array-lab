let cats = ["Milo", "Otis", "Garfield"]
//
function destructivelyAppendCat(name){
cats.push (name)
}
//
function destructivelyPrependCat(name){
    cats.unshift (name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
//
function destructivelyRemoveFirstCat(){
    cats.shift()
}
//
function appendCat(name){
    let addCats = [...cats]
    addCats.push(name)
    return addCats
}
//
function prependCat(name){
    let addCats = [...cats]
    addCats.unshift(name)
    return addCats
}
//
function removeLastCat(){
   let addCats = [...cats]
   addCats.pop()
   return addCats
}
//
function removeFirstCat(){
    let addCats = [...cats]
    addCats.shift()
    return addCats
}