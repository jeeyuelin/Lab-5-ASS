const fs = require('fs');

fs.readFile('books.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const bookData = JSON.parse(data);

    // Access all books
    bookData.Books.forEach(book => {
        console.log(`
Title: ${book.title}
Author: ${book.author}
Year: ${book.publicationYear}
Genres: ${book.genres.join(", ")}
        `);
    });
});