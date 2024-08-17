/* 
fetch : is used to fetch any json data from server into our webpage there we used fetch.
    https://jsonplaceholder.typicode.com/posts
    https://jsonplaceholder.typicode.com/users

*/

fetch(`https://jsonplaceholder.typicode.com/posts`)
.then(response=>response.json())
.then(json=>console.log(json));