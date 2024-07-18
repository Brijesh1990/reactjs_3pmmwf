/* 
if : if within another if that called nested if

syntax :

   if(condition)
   {
     if(condition)
     {
     statements;
   }
}
  else 
   {
   statements;
   }


*/


let a=15;
let b=10;
if(a>b)
{
    if(a!=0 && b!=0)
    {
    console.log('a is greter than b and both are positive numbers')
    }
}
else 
{
    console.log('a is smaller than b')
}