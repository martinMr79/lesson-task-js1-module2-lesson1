//Question 1

/*

function receivingFunction(isAFunction) {
     if(typeof isAFunction  === "function") {
        isAFunction(); 
     }
}

function callbackFunction(receivingFunction) {
    console.log("I am a callback function")
    
}

receivingFunction(callbackFunction)

//Question 2

const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

prizes.forEach(function (prize, index) {
console.log(`Prize ${index +1}: ${prize}`);
});


//Question 3

setTimeout(function(){
    console.log("I waited 5 seconds before executing")
},
5000);

//Question 4

let count = 0; 

const counter = setInterval(function(){    
    
count++; 

if(count === 5) { 
    clearInterval(counter);
}

console.log(count);
}, 1500);

*/

//Question 1

function receivingFunction(insideFunction) {
 
    if (typeof insideFunction === "function") { 
        insideFunction()
 }

}

function callbackFunction() {
    console.log("I am a call back function")

}

receivingFunction(callbackFunction)


//Question 2

const colours = ["red", "green", "blue", "orange", "yellow"];

colours.forEach(function(color) {
    console.log(color)
}); 

const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

    prizes.forEach(function(prize, index){
        console.log(`Prize ${index +1}: ${prize}`);
    } ) 
 
//Question 3

//setTimeout(someFunction, 5000); 


setTimeout(function() {
    console.log("I waited 5 seconds before executing")
    alert("I waited 5 seconds before executing")
}, 5000 )




//Question 4