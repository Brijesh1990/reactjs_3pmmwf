//module is load on server and used to re-used code one page to another page there we used module

function ad()
{

    var a=10;
    var b=20;
    var c=a+b;
    return c;

}
function subs()
{

    var a=10;
    var b=20;
    var c=a-b;
    return c;

}
function mult()
{

    var a=10;
    var b=20;
    var c=a*b;
    return c;

}

export {ad,subs,mult}