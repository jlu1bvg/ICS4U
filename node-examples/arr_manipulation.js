function append(array, element){
    if(typeof(element) === 'array'){
        for(var i = 0; i < element.length; i++){
            array.push(element[i]);
        }
    }
    else{
        array.push(element);
    }
}

function insert(array, element, index){
    if(typeof(element) === 'array'){
        for(var i = 0; i < element.length; i++){
            array.splice(index + i, 0, element[i]);
        }
    }
    else{
        array.splice(index, 0, element);
    }
}

function remove(array, index){
    array.splice(index, 1);
}

function removeRange(array, start, end){
    array.splice(start, end - start + 1);
}

function removeStart(array){
    array.shift();
}

function find(array, element){
    return array.indexOf(element);
}

function contains(array, element){
    return array.includes(element);
}

function sort(array){
    array.sort();
}

function reverse(array){
    array.reverse();
}

function toString(array){
    return array.toString();
}

function combine(array1, array2){
    return array1.concat(array2);
}