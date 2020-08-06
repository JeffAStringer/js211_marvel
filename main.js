const dotenv = require('dotenv').config();
process.env.NODE_ENV = 'test';


console.log("dotenv " + dotenv)
console.log("process " + process.env)
console.log("here is my key " + process.env.NODE_ENV)



let marvelChar = [];
let marvelCharHardCode = []


const getCharacters = () => {
    fetch('http://gateway.marvel.com/v1/public/characters?nameStartsWith=x&limit=10&ts=1&apikey=d2e7daa1001061fc8b0a817e6ea37b15&hash=3895915b138e533700f3a903b4a07308')
        .then(res => {
            if (!res.ok) {
                throw Error(res.statusText)
            } return res.json()
        })
        .then(res => marvelChar = res)
        .catch(err => console.log(`Error,  ${err}`))
}

getCharacters()


let consolefunction = () => {
    for (let i = 0; i < 10; i++) {
        console.log(marvelChar.data.results[i])
    }
}
setTimeout(consolefunction, 20000)