var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

var i = 0
readBooks(10000, books[i], readTime = (check) => {
    i++
    if(i < books.length) {
        readBooks(check, books[i], readTime)
    }
})

