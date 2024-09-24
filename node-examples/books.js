let library = [
    { title: "1984", author: "George Orwell", year: 1949, isAvailable: true },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isAvailable: true },
    { title: "Moby Dick", author: "Herman Melville", year: 1851, isAvailable: true },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isAvailable: true },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813, isAvailable: true }
];

const prompt = require("prompt-sync")()

function AddBook(_title, _author, _year, _isAvailable){
    let template = {
        title: _title,
        author: _author,
        year: _year,
        isAvailabe: _isAvailable
    }
    library.push(template)
}

function ListBooks(){
    for (const i in library){
        console.log(`${library[i].title} by ${library[i].author}`)
    }
}

function BorrowBook(bookName){
    for (const i in library){
        if(library[i].title == bookName && library[i].isAvailable == true){
            library[i].isAvailable = false
        }
    }
}

function ReturnBook(bookName){
    for (const i in library){
        if(library[i].title == bookName){
            library[i].isAvailable = true
        }
    }
}

function ListBooksByAuthor(author){
    for (const i in library){
        if(library[i].author == author){
            console.log(`${library[i].title} by ${library[i].author}`)
        }
    }
}

function FindBooksBeforeYear(year){
    for (const i in library){
        if(library[i].year < year){
            console.log(`${library[i].title} by ${library[i].author}`)
        }
    }
}

function RemoveBook(bookName){
    for (const i in library){
        if(library[i].title == bookName){
            library.splice(i, 1)
        }
    }
}

let functions = {
    1: function(){
        let title = prompt("Enter title: ")
        let author = prompt("Enter author: ")
        let year = prompt("Enter year: ")
        let isAvailable = prompt("Enter availability: ")
        AddBook(title, author, year, isAvailable)
    },
    2: function(){
        ListBooks()
    },
    3: function(){
        let bookName = prompt("Enter book name: ")
        BorrowBook(bookName)
    },
    4: function(){
        let bookName = prompt("Enter book name: ")
        ReturnBook(bookName)
    },
    5: function(){
        let author = prompt("Enter author name: ")
        ListBooksByAuthor(author)
    },
    6: function(){
        let year = prompt("Enter year: ")
        FindBooksBeforeYear(year)
    },
    7: function(){
        let bookName = prompt("Enter book name: ")
        RemoveBook(bookName)
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
