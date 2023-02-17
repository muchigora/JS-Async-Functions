//**************ASYNC/AWAIT------------ */
fs = require('fs');
// declaring a loadFile function with async 
const loadFile = async() =>{
    try{
        const data = await fs.promises.readFile('./assets/est.txt',{encoding:'utf-8', });
        console.log(data);
    }catch{
        console.error(error);
    }    
}
loadFile();

const fetchPokemon = async(id)=>{
    try{
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/${id}');
        const data = await res.json();
        console.log(data);
    }catch(err){
        console.error(err);
    }
}
fetchPokemon(2);

resolve