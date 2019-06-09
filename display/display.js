let numbers = [5 ,3 , 8 , 6 , 1]
let smallest = numbers[0];
for(let i = 1; i < numbers.length; i++){
    if (numbers[i]< smallest){
         smallest = numbers[i];
    }
}
console.log(smallest)