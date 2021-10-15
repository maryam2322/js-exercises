// Exercise 1

function arrayMin(arr) {
    let l = arr.length, min = Infinity;
    while (l--) {
        if (arr[l] < min) {
            min = arr[l];
        }
    }
    return min;
}

function arrayMax(arr) {
    let l = arr.length, max = -Infinity;
    while (l--) {
        if (arr[l] > max) {
            max = arr[l];
        }
    }
    return max;
}
const array = [10, 23, 2, 6, 81, 2, 0]
let minimum = arrayMin(array)
let maximum = arrayMax(array)
console.log([minimum , maximum])


// Exercise 2

function occurrences(myArr){
    let obj ={};
    for (let i of myArr){
        if(i in obj) obj[i]++;
        else obj[i] = 1;

            }
    return obj
}
const myArray = [1,1,5,4,3,4,5,4,3,2,2,6,6,5,2,9,0]
console.log(occurrences(myArray))
