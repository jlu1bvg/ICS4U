function Book(title, author, year){
    this.title = title
    this.author = author
    this.year = year
}

Book.prototype.GetSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`
}

let book1 = new Book("How to hack the system", "Eric", 2023);
console.log(book1.GetSummary())

function Magazine(title, author, year, issue){
    Book.call(this, title, author, year)
    this.issue = issue
}

Magazine.prototype = Object.create(Book.prototype)
