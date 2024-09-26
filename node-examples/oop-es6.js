class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    GetSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

Book.prototype.Years = function(){
    return new Date().getFullYear() - this.year;
}

let book1 = new Book("How to hack the system", "Eric", 2023);
console.log(book1.GetSummary());
console.log(book1.Years());

class Magazine extends Book{
    constructor(title, author, year, issue){
        super(title, author, year);
        this.issue = issue;
    }

    GetSummary(){
        return super.GetSummary() + ` Issue: ${this.issue}`;
    }
}

let mag1 = new Magazine("Mad", "Mobin", 2000, 2)
console.log(mag1.GetSummary())