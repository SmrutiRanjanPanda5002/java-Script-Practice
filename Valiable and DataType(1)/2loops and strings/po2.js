console.log("BUbber");
//repitation in js
//In this case we use the loop in js
/*
Three type of loops 
1. for loop
2. While loop
3. do whiole loop
*/

//--------------------for loop-------------------
/*
for(initialization ;condition ;updation )
{
    for loop body
}
*/
//example
console.log("IMplimenting tne for loop");
let a;
for(a=0;a<=40;a++)
{
    console.log("Bubber");
}

//revers counting
let i;
for(i=5;i>0;i--)
{
    console.log(i);
}

//----------itretion------------
//When we use the break key word then it out the loop

//When we use the continue key word then it skip the itersion
console.log("Using the continue key word")
for(let b=1;b<=5;b++)
{
    if(b==4)
    {
        continue;
    }
    else
    {
        console.log(b);
    }
}
//Using while loop

