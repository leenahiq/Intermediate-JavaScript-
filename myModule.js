//created a function fot export purpose 
const add = (num1,num2)=>{
return num1 + num2;
}

const subtract =(num1,num2)=>{
return num1 - num2;
}
const multiply =(num1,num2)=>{
    return num1 * num2;
}


// .export wont effect actual file 

module.exports = {
    add,
    subtract,
    multiply,
    discription: "some not cool stuff",
    aurthor: "someone someone "

};


