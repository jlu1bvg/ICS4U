const prompt = require("prompt-sync")()

class Library{
    constructor(library){
        this.library = library
    }

    AddBook(_title, _author, _year, _isAvailable){
        this.library.push(new Book(_title, _author, _year, _isAvailable))
    }   

    ListBooks(){
        for (const i in this.library){
            console.log(`${library[i].title} by ${library[i].author}`)
        }
    }

    BorrowBook(bookName){
        for (const i in this.library){
            if(library[i].title == bookName && library[i].isAvailable == true){
                library[i].isAvailable = false
            }
        }
    }

    ReturnBook(bookName){
        for (const i in this.library){
            if(library[i].title == bookName){
                library[i].isAvailable = true
            }
        }
    }

    ListBooksByAuthor(author){
        for (const i in this.library){
            if(library[i].author == author){
                console.log(`${library[i].title} by ${library[i].author}`)
            }
        }
    }

    FindBooksBeforeYear(year){
        for (const i in this.library){
            if(library[i].year < year){
                console.log(`${library[i].title} by ${library[i].author}`)
            }
        }
    }

    RemoveBook(bookName){
        for (const i in this.library){
            if(library[i].title == bookName){
                library.splice(i, 1)
            }
        }
    }
}

class Book{
    constructor(title, author, year, isAvailabe){
        this.title = title,
        this.author = author,
        this.year = year,
        this.isAvailabe = isAvailabe
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

let library = new Library([])

let choices = {
    1: function(){
        let title = prompt("Enter title: ")
        let author = prompt("Enter author: ")
        let year = prompt("Enter year: ")
        let isAvailable = prompt("Enter availability: ")
        library.AddBook(title, author, year, isAvailable)
    },

    2: function(){  
        library.ListBooks()
    },

    3: function(){
        let bookName = prompt("Enter book name: ")
        library.BorrowBook(bookName)
    },

    4: function(){
        let bookName = prompt("Enter book name: ")
        library.ReturnBook(bookName)
    },

    5: function(){
        let author = prompt("Enter author: ")
        library.ListBooksByAuthor(author)
    },

    6: function(){
        let year = prompt("Enter year: ")
        library.FindBooksBeforeYear(year)
    },

    7: function(){
        let bookName = prompt("Enter book name: ")
        library.RemoveBook(bookName)
    }   
}

while(choice != 8){
    functions[choice]();
    PrintPrompt();
    choice = prompt("Enter here:")

    choices[choice]()
}
