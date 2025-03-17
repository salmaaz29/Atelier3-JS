const numbers = [1, 3, 4];

function factoriel(n){
    if(n===0 || n===1){
        return 1;
    }else{
        return n*factoriel(n-1);
    }
}

const fact = numbers.map(x=>factoriel(x));
console.log(fact);