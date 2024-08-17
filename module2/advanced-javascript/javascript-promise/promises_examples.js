const count=true;

let contValue=new Promise(function(resolve,reject)
{

    if(count)
    {
        resolve('There is an count Number of values')
    }
    else 
    {
        reject('The is no count values is found')
    }
})
console.log(contValue);