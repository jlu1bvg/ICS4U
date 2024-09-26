const prompt = require("prompt-sync")()

class Book{
    constructor(library){
        this.library = [
            { title: "1984", author: "George Orwell", year: 1949, isAvailable: true },
            { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isAvailable: true },
            { title: "Moby Dick", author: "Herman Melville", year: 1851, isAvailable: true },
            { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isAvailable: true },
            { title: "Pride and Prejudice", author: "Jane Austen", year: 1813, isAvailable: true }
        ];
    }
}

Book.prototype.AddBook = function(_title, _author, _year, _isAvailable){
    let template = {
        title: _title,
        author: _author,
        year: _year,
        isAvailabe: _isAvailable
    }
    this.library.push(template)
}

Book.prototype.ListBooks = function(){
    for (const i in this.library){
        console.log(`${library[i].title} by ${library[i].author}`)
    }
}

Book.prototype.BorrowBook = function(bookName){
    for (const i in this.library){
        if(library[i].title == bookName && library[i].isAvailable == true){
            library[i].isAvailable = false
        }
    }
}

Book.prototype.ReturnBook = function(bookName){
    for (const i in this.library){
        if(library[i].title == bookName){
            library[i].isAvailable = true
        }
    }
}

Book.prototype.ListBooksByAuthor = function(author){
    for (const i in this.library){
        if(library[i].author == author){
            console.log(`${library[i].title} by ${library[i].author}`)
        }
    }
}

Book.prototype.FindBooksBeforeYear = function(year){
    for (const i in this.library){
        if(library[i].year < year){
            console.log(`${library[i].title} by ${library[i].author}`)
        }
    }
}

Book.prototype.RemoveBook = function(bookName){
    for (const i in this.library){
        if(library[i].title == bookName){
            library.splice(i, 1)
        }
    }
}

PrintPrompt()
let choice = prompt("Enter here:")

function PrintPrompt(){
    console.log("1. Add a new book")
    console.log("2. List available books")
    console.log("3. Borrow a book")
    console.log("4. Return a book")
    console.log("5. List books by author")
    console.log("6. Find books before a year")
    console.log("7. Remove a book")
    console.log("8. Exit the program")
}

while(choice != 8){
    functions[choice]();
    PrintPrompt();
    choice = prompt("Enter here:")
}
