/*  
filter is a array methods 
filter is used to filters data from array on conditionaly.
filter is used to return all array in list and check condition to return value acording to checked conditions there we used filter.


*/

var age=[10,20,30,40,50,12,13,9,8,5,45,65];
//age.filter(callbacFunction);
// age.filter(Display);
console.log(age.filter(Display));
function Display(item)
{
    // var chk=item>=18;
    // console.log(chk);

    var chk=item>=18;
    return chk;
}
