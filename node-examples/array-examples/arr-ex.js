let arr = [1, 6, 3, 5, 7, "hello", 7.8]
console.log(arr)

let arr1 = ["hello", "goodbye", "eric", "jeff", "evan", "joline"]
arr1.push("juliet")
console.log(arr1)
let eric_jeff = arr1.splice(2,2)
console.log(arr1)
console.log(eric_jeff)

for(let i = 0; i < arr1.length; i++){
    console.log(arr1[i])
}

// arr1.forEach(x=>console.log(x))
let x = arr1.pop()
console.log(x)
console.log(arr1)
