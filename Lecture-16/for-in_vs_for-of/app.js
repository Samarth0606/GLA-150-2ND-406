let arr = [10,20,30,40];


for(let item of arr){
    console.log(item);
}

let obj = {
    a:10,
    b:20,
    c:30,
}
for(let item in obj){
    console.log(item);
    // console.log(obj.item); //❌
    console.log(obj[item]); //✅
}