// applied main function 
var myVar;
function mainFunction()
{
    myVar=setTimeout("Display()",2000);
}

function Display()
{

    document.getElementById("main-content").style="display:block";
    document.getElementById("loader").style="display:none";
    
}