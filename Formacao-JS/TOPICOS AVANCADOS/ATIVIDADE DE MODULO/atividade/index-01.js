const url = `https://swapi.dev/api/films`;
function getData() {
    return fetch(url)
    .then((response) =>{
        return response.json()
    })
    .then((response) =>{
        const producer = response.results.map((items) => {
            if (items.producer.includes('Rick')) {
               return items.title
            }  
        })
       const producerGary = producer.filter(x => x !== undefined)

        producerGary.forEach((item) => {
            console.log(item)
        })
    })
    .catch((error) => {
        console.log(error);
    })
}

getData();