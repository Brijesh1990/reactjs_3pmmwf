// let countValue=new Promise(function(resolve,reject)
// {
//    reject('Promises is reject here')
// });


let countValue=new Promise(function(resolve,reject)
{
   resolve('Promises is resolved')
});

// executes successfully promises is resolved successfully
countValue.then(function successValue(result){
    console.log(result);
})
.catch(function errorValue(result){
    console.log(result)
})

