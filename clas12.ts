//Callback function
//Callback keyword ***
function func1(Callback:Function){
    console.log("pls wait")
    Callback();
}
function func2(){
    console.log("I have Done")
}
func1(func2);

//Function Types paranthesis
let returnsStringorUndef:() => string|undefined

let maybeReturnsString:(()=> string)|undefined

// Paranthesis type inference
let varT = ['alpha', 'beta', 'gamma']
varT.forEach((varT,index)=>{
    console.log(varT,index)
})
//function type-alias
//* type keyword
type varU = (a:number) => string

function func3(b:varU){
    console.log(b(123))
}
func3((a)=> "message");

//function type-alias-II
//* type is keyword
// type varU1 = (a:string) => string

// function func31(b1:varU1){
//     console.log(b1("Pak"))
// }
// func31((a)=> b1);

//Return type- void
//return type is void, if no return statement or output

// function alpha1(message: string){
//     console.log(message)
//     return 1;
// }

//***Never return type
//seldom use to through some new errors
// function alpha9(message: string): never{
//     throw new Error("High");
// }

//* Function overloading is a feature of OOP
//duplicate functions
//Through function overloading, you can define functions with same names

function add(a:string, b:string):string;
function add(a:number, b:number): number;
function add(a:any, b:any):any{
    return a+b;
}
console.log(add ("hi","' ' pak"));
console.log(add(1,2));
//curly brackets are function implementations
//do not use curly brackets (implementations) for 1st 2 functions else it will give errors
//function overloading is used as last resort for complex Functions


// Chap-6 of book...Arrays
// arrays are containers to carry data and values
// multiple types of data can be stored in JS Arrays
//[] is used to store array values

// let varA = ['text',12,null,undefined,true,""]
//special syntax is used for TS Arrays, sequentially

// let varB = ['pak', 'india'] 
// varB.push("new");
// varB.push(true) //NOT OK, error

//*use following syntax in TS to define arrays

let new_array: (string|number)[]
new_array = ["beta", 123]

//*Arrays and functions
// function that return Array of strings
let varG:()=> string[]

//Array of functions that each return a String
let varQ: (()=> string)[]

//* TS can infer values and types

//* Evovling arrays
//Type:any
let values= []; //not recommended

//Multidimensional Arrays
// 2D Array or Array of Arrays
var beta5: (string|number)[][] //2 dimensional
// var beta5:(string|number)[][][] //3 D and so on..
beta5 = [
    
    ["Mon","Tue","Wed","Th","Fri","Sat","Sun"],
    [1,2,3,4,5,6,7]
]
for (let calender in beta5){
    console.log(beta5[calender])
}

// **Accessing members of arrays

// let fruits1:string[] =['Apple','oranges','mango']
// console.log(fruits1[0])
// for (let i in fruits1)
// console.log(fruits1[i])

// Caution wih Array Members

// Sometimes TS does not give error

// function tech (b:string[]){
//     console.log(b[4587].length) //No complaint by TS
// }
// tech(["Hi", "Over"])

//***Spread & Rests

//... spread operators can join Arrays
//two different TYPES ARRAYS can be joined via a new Arrays

// let Arrow = ['me','you','we']
// let bow = [1,2,3]
// let arch = [...Arrow,...bow]
// for (let i in arch)
// console.log(arch[i])

// ***in functions rest parameters must have same array types
// as other parameter in functions

// function viola(a:string, ...names:string[]){
//     for (let i in names)
//     console.log(a,names[i])
// }
// let names = ['ahmed', 'qasim', 'bilal']
// let greeting = "Aoa"
// viola(greeting, ...names)

//***Tuples introduced in TS
//Can have two values of different data types
//Precise length, but no dynamic length... 
// Multiple types can be saved in one Instance
// Complier default is not set automatically in Tuples
// let hill = 1;
// let mole = 'apk';
// let employee3: [number, string] = [1,'apk']

//***Tuples Assingability***
//Tuples are more specific than variable length arrays

let man = [false, 123];
let new_man: [boolean, number]= [true,123]

//**Tuples of different length are not assingable to eachother
// const tuple3:[boolean,number, string] = [true,12,'man']
// const tuple2:[number,string] = tuple3

//** Tuple Inferences-page113-114 */
//return type:(string|number)[] //arrays
//return types:[string, number] //tuple

//***Const Asserted Tuples
//as const is keyword that can be insert at end of arrays n make it a tuple
const unionArray = [11,'alp'];
const readonlyTuple = [11,'alp'] as const;
 