/* async is a keyword that is used to return any function is an asynchrounous function. the async function return a promise

syntax :  

   async function name(para, para1,para2.....paran)
   {
        statements;
   }

*/


async function test()
{
    console.log('It is return promises');
    return Promise.resolve();
}
test();
