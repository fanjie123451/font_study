let a = 112;

console.log(a);


test = false;

if(test){
    console.log("true");
}else{
    console.log(test+typeof(a));
}


function foo1(){
    console.log("年龄是"+age);
    var age = 23;

}

//等同于
function foo2(){
   
    var age ;
    console.log(age);
    age = 23;

}

//也就是把所有变量声明都拉到函数作用域的顶部

foo1();
foo2();