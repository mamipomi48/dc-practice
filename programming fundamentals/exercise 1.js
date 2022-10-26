function temperature(t) {
if (t < 60){
    console.log ("Chill");
}
else if (t >= 60 && t <= 80){
    console.log ("Pleasant");
}
else if(t > 80 && t <= 100){
    console.log ("Hot");
}
else if (t > 100){
    console.log ("Very Hot");
}

}

temperature(52);
temperature(73);
temperature(105);
temperature(89);



