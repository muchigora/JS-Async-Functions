
/**
 * CALLBACK
 * As a function passed as an argument
 * Synchronous example
 */
const names = ["Johanna", "Tressica", "Tyesha", "Tamika", "Jayla", "Morgan", "April"]
// names.forEach(names => console.log(names))

// the parameter cb will be replaced by the function commented out on top 
function myForEach (arr, cb) {
    for(let i=0; i<arr.length; i++){
        const element = arr[i];
        cb(element)
    }
}

// the parameter cb is called using a function 
myForEach(names, (name) => {
    console.log(name);
})


/**
 * CALLBACK
 * As a function passed as an argument
 * Asynchronous example
 */

const loadPokemon = (id, cb)=>{
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data=>{
        cb(data)
    })
}
loadPokemon(56,(pokemon)=>{
    console.log(pokemon);
})