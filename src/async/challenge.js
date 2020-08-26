const fetchData= require('../utils/fetchData')
const API= "https://rickandmortyapi.com/api/character/"


const anotherFunction = async () =>{
    try {

        const data = await fetchData(API)
        const character = await fetchData(`${API} ${data.results[0].id}`)
        const dimension = await fetchData(character.origin.url)

        console.log(data.info.count)
        console.log(character.name)
        console.log(dimension.dimension)


    } catch (error) {
        console.error(error)
    }
}

console.log('antes')
anotherFunction()
console.log('despues')
