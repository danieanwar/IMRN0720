var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
var i = 0;

let readBooks = (waktu) => {
    readBooksPromise(waktu, books[i])
    .then((results) => {
        i++
        if (i < books.length) {
            readBooks(results)
        }
    })
    .catch((error) => error)
}

readBooks(10000);