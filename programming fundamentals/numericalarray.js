//how would you find the largest number in the array?
//you have to check thru each number in the array
let n = [10, 4, 54, 23, 5];
let big = n[0];
for (i = 0; i < n.length; i++){
    
    if(n[i] > big) {
        big = n[i];
    }


}
console.log(big);