function a(){
    let ex = 10;
    var ex2 = 100;
    function b(){
        console.log(ex2);
    }
    return b
}

let returnedVal = a();
console.log(returnedVal);
returnedVal()