/* javascript Hoisting :    A variable is declared before it is used i.e called js hoisting
                             or
                             A variables can be used before it han been decalared i.e called
                             
                             

*/



// var x;
// x=10;
// // document.write(x);
// console.log(x);

var myvar;
function display()
{
    myvar=10;
    console.log(myvar);
}
display();
