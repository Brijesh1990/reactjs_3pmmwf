function swap()
{

    // swap of two numbers without using third variables 
    var a=10;
    var b=20;
    // after swap a =20 and b=10
    a=a+b; //30
    b=a-b; //10
    a=a-b; //20

    console.log("After swap a is : "+a + "\n"+ "after swap b is :"+b);


}
swap();