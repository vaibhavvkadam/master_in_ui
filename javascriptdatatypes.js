//data types in javascript
//the type of data which can asssign to a varible


//these are the premitive data types
//1>number---any number
//2>string----any text data
//3>boolean----true,false
//4>undefined
//5>null

let employeeName1='vk';
console.log(employeeName1);


console.log(typeof employeeName1)

let number=100;
console.log(typeof number);

let checkTrueOrFale=true;
console.log( typeof checkTrueOrFale)

console.log(`employee name ${employeeName1} value is ${number}n true value:${checkTrueOrFale}`);



//undefined
let name;//variable decleration

// name='vaibhav';
console.log(name);


//null(dummy value) datatypes
let test=null;
console.log(`${test} :${typeof test}`);

//javascripts operators

/*
javascript operators
-------------------
-> assignment operators:=
->arithematic operator:+ - / * %
->short hand math operators:+=,-=,/=,*=
->conditional operators: <,>,<=,>=,!==
->unary operator: ++,--
->logical operators: &&, ||,^
->trnary operators:  ?:
->equality operators: ==, ===
*/

//assignment operator
let a=20;
console.log(`value of a:${a}`);

//arithematic operator
let c=12;
let b=10;
console.log(`plus operator:${c+b}`);
console.log(`multipation operator:${c*b}`);
console.log(`subtraction operator:${c-b}`);
console.log(`divide operator:${c/b}`);
console.log(`reminder operator:${c%b}`);

//short hand operator

let d=20;
d+=30;
console.log(`short hand operator:${d+=40}`);
console.log(`short hand operator:${d-=40}`);
console.log(`multipation hand operator:${d*=40}`);
console.log(`divide hand operator:${d/=40}`);







//logical operator

/*

AND=> T && T -> T
OR=> F || F  ->F
XOR=> T^F, F^T->T

*/
let variable1=20;
let variable=8;


if(variable1 == variable && variable==48 )
{
    console.log(`not same`);
    variable1++;
    console.log(variable1)
}else{
    console.log("same");
    variable++;
    console.log(variable);
}
let variable2=55;


//TERNARY OPERATOR
console.log(variable<variable1?'true':variable<variable2?'variable is gre than v1 but less than v2':'variable is gret than v1 and v2');


let marks=5;
let message='';
(marks>=35)?message='you cleared exam':message='you arenot cleared exam';
console.log(message);




//equality operator
//==, ===
a=20;
b='20';
if(a===b){
    console.log('equal');
}else{
    console.log('not equal');
}



