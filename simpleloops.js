function DisplaynumbersWhileloop() {
    var i = 1;

    while (i <= 10) {
        console.log(i);
        i++;
    }
}

console.log("While loop display numbers");
DisplaynumbersWhileloop();

function DisplaynumbersForloop(){
    for(var i=1;i<=10;i++){ // initialise , check condition , post condition (Increment|Decrement)
        console.log(i);
    }
}
console.log("For loop display numbers");
DisplaynumbersForloop();
// reverse a string

console.log("Reverse a string using while loop");

var str= "Hello World";

var rstr="";

var l=str.length-1;

while (l>=0){
rstr = rstr+str[l];
l--;
}

console.log(rstr);

console.log("Reverse a string using for loop");

str= "Hello World";

rstr="";


for(l = str.length-1;l>=0;l--){
    rstr+= str[l]
}

console.log(rstr)

// for loop
console.log("Reverse a string using latest for loop");
str="Hello World";
rstr='';

for(let c of str){
    rstr= c+rstr
}

console.log(rstr)

// Write a simple program to find number of spaces in a string using while and for loop

// Input= "Hello World How are you doing?" Output = 5
