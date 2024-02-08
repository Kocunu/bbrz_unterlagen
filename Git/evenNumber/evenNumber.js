function findNumber(num){
    let count = 0;
    for(let i = 0; i < num.length; i++){
        if(num[i].toString().length%2===0){
            count++;
        }
    }
    console.log(count);
}

let arr = [1,2,55,2,1,0,9,2123];
console.log(findNumber(arr));


