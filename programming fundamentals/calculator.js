//let a = 45;
//let b = 25;
//let c = a + b;
//console.log(c);

//let a1 = 25;
//let b1 = 55;
//let c1 = a1 + b1;
//console.log(c1);

function addnumbers(a,b){
    //let a = 45;
    //let b = 25;
    let c = a + b;  
    console.log(c);

}

function simplecalculator(a,b,o){
if (o == "+"){
    let c = a+b;
    console.log(c);
}else if(o == "-"){
    let c = a-b;
    console.log(c);

}else if(o == "*"){
    let c = a*b;
    console.log(c);
    
    }else if(o == "/"){
        let c = a/b;
        console.log(c);
    } else {console.log("I don't know what I'm doing")

    }


}
//addnumbers(45,25);
simplecalculator (4,5,"+");
simplecalculator (25,5,"-");
simplecalculator (15,5,"*");
simplecalculator (15,5,"/");
simplecalculator (15,5,"$");
