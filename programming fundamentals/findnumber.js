//write a function which takes 2 parameters, a number, and an array. If the given number in the first parameter is found in the given array which is the second paramenter, print "number found", if not print "number not found"

let n = [5, 15, 20, 25, 30];

function numArr(x, array) {
    console.log(x, " " + array);
    let numberFound = false;

    for (i=0; i<array.length; i++){
        if (x == array[i]){
            numberFound = true;
          }
    }
    if (numberFound){
        console.log("Number found")
    }else{
        console.log("Number not found")
    }

}

numArr (70, n);
