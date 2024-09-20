let person = {
    name: "Steve",
    age: 30,
    isStudent: false
}

console.log(person.name)

const key = 'age'
console.log(person[key])

person.city = "North York"
console.log(person.city)

let calculator = {
    add(a, b) {
        return a + b
    },
    subtract: function(a, b) {
        return a - b
    },  
}

console.log(calculator)

let user = {
    name: "Alice",
    greet: function(){
        console.log(`This use is ${this.name}`)
    }
}

user.greet()

const obj = {
    a: 6,
    b: "hello",
    c: function() {
        console.log(this.a)
    }
}

let {b, c} = obj

for (const key in obj){
    console.log(obj[key]);
}
