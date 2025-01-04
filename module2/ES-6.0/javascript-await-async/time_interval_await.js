/* await is a keyword that is used to paused an aync function untill the promises return result.

syntax :  

await Promise;

*/

let promise=new Promise(function(resolve,reject){

// set an timeOut
setTimeout(function(){
resolve('The task is completed in 4 seconds');
},4000);
})
// defined async function
async function Display()
{
let result=await Promise;
console.log(result);
console.log('Hello i am just testing');
}
setInterval(Display,2000);

