let fruits = ["apply", "orange", "banana"]
fruits.push("grape", "mango")
console.log(fruits)

let numbers = [5, 10, 15]
numbers.unshift('0', '1')

//remove elements
let animals = ["dog", "cat", "elephant", "lion"]
animals.pop()
console.log(animals)

let colors = ["red", "blue", "green", "yellow"]
animals.shift()
console.log(colors)

//searching and finding
let cars = ["Toyota", "Honda", "Tesla", "Ford"]
console.log(cars.indexOf("Tesla"))

let drinks = ["water", "juice", "soda", "milk"]
console.log(drinks.includes("coffee"))

//sorting and reversing
let ages = [21, 45, 18, 35, 25]
console.log(ages.sort())

let letters = ["a", "b", "c", "d"]
console.log(letters.reverse())

//slicing and splicing
let months = ["January", "February", "March", "April", "May", "June"]
console.log(months.slice(3, 2))

let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"]
console.log(cities.splice(2, 2))

//combining arrays
let hobbies = ["reading", "swimming", "gaming", "traveling"]
console.log(hobbies.join(', '))

let group1 = [1, 2, 3]
let group2 = [4, 5, 6]
console.log(group1.concat(group2))

