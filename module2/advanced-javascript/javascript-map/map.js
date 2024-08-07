// map is used to map each data of array and return a list of each data from array 

var emp=["brijesh","rajesh","kumar","disha","sahil","rajesh","jay"];
// console.log(emp);
//emp.map(callbackfunction);
//Array.map(callbackfunction)
/*Array.map(function(){

})  */

emp.map(Display);
function Display(item)
{

    var nm="The name of employees is :"+item;
    console.log(nm)
}


