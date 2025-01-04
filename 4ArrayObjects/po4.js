//Using Objects and Arrays 
let obj={
    name: "Smruti", 
    age: 19, 
    Hight: "5ft 7in", 
    weight: "69kg",
    greet: function()
    {
        console.log("Hello I am learning js !!")
    }
}
console.log(obj);
obj.greet();  //Using function in Object
  

//Using Array in js
//---------Built in methods-----------
/*
              push()
              pop()
              shift()
              unshift()
              slice()
              splice()
              map()
              filter()
              reduce()



*/

//Using of filter
let arr=[10,20,30,40,55]
let evenArray=arr.filter((Number) =>{
    if(Number%2===0)
    {
  return true;
    }
    else
    {
        return false;
    }
});
console.log(evenArray);


let arrr=[46,44,4,'SMruti','sosh']
let anss=arrr.filter((value) => {
    if(typeof(value)=='string')
    {
        return true;
    }
    else
    {
        return false;
    }
});
console.log(anss);


// Using reduce in js
// acc and cur

// let ar1=[10,20,30,40]
// let out=ar1.reduce((acc,curr => {
//     return acc+curr;
// },0))

// console.log(out);


//Using sort key word in js
let ar2=[8,67,6,56,44]
ar2.sort();
console.log(ar2);


// Using for each in js
let ar3=[10,20,30]
let length=ar3.length;
console.log("The length of the array is",length);
ar3.forEach((value,index) =>
{
    console.log( "Number",value,"Index",index);
})


//Using for in in js
for(let key in obj){
    console.log(key);
}

// Using for of in js
 let ar4=[345,455,3,45,5,56];
 for (let value of ar4) {
 console.log(value)
 }

 // Example 2
 let fullName="Smruti";
 for(let value of fullName)
 {
    console.log(value);
 }


 // Passing Arrays in Functions
 let ar5=[10,20,30,40,50]
function getSum(ar5)
{
    let len=arr.length;
    let sum=0;
    for(let index=0;index<len;index++)
    {
        sum=sum+arr[index];
    }
    return sum;
}
let totalSum=getSum(ar5);
console.log(totalSum);