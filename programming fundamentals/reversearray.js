//Write a function which would reverse an array of numbers and store in a different array. For example 
//a = [8,2,3,2,2,3]

//output
//b = [3,2,2,3,2,8]

//let a = [1, 2, 3, 4, 5];
//let b = ();
//let j = 0;

  //  for(i = 0, i< a.length - 1; i--){
    //b(j)= a[i]
    //j=j +1
    //};
    //console.log(b);
    
    //new problem write a function 
   // output
    //b = [3,3]
    //c = []
    //store in a separate array

    let a = [8,2,3,2,2,3]
    let b = []//odd
    let c = []//even
    for(i=0; i<a.length;i++){
        if(a[i]%2==1)// a of i is identifying what's in the array
        b.push(a[i])
        else{
            c.push(a[i])

        }
    }
    console.log(b);
    console.log(c);
    







