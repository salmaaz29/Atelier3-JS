const numbers = [1, 7, 10, 9, 8];
const max = numbers.reduce((acc,x)=>{
    if(x>acc){
        return x;
    }else{
        return acc;
    }
});
console.log(max);