function fibonachi(count){
    let fib = [];
    for(let i=0; i<count; i++){
        if (i==0) fib[i]=1;
        else if (i==1) fib[i]=2;
        else fib[i] = fib[i-2]+fib[i-1];
     }
     return fib;
}

let f = fibonachi(7);
console.log(f);

function factorial(n) {
    let fact = 1;
    if (n==0) return fact;
    for(let i=1; i<=n; i++){
        fact *= i;
    }
    return fact;
}

let a = factorial(0);
console.log(a);

let b = factorial(3);
console.log(b);

let addAndMul = function(num){
    num += "" ;
    let add = 0, mul = 1;
    for(let i=0; i<= num.length; i++){
        add +=  +num[i];
        mul *= +num[i];      
    }
    return {
        "Сумма ": add,
        "Произведение": mul
    }
};

console.log(addAndMul("456"));

function revers(number){
    number += "";
    let reversNumber = "";
    for(let i=number.length-1; i>=0; i--){
        reversNumber += number[i];
    }
    return +reversNumber;
}

console.log(revers(4326));

function randomNumber(){
    let number = Math.floor(Math.random()*100);
    for(let count=1; count<=10; count++){
        let result = +prompt(`Попытка № ${count} Введите число `);
        if(result == number){
            return alert(`вы угадали число.Попыток ${count} Число ${number}`);
        }else if(result < number){
            alert (`Ваше число ${result} меньше загаданного!`);
        }else if(result > number){
            alert (`Ваше число ${result} больше загаданного!`);
        }else{
            return alert(`вы  не угадали число. Число ${number}`); 
        }
    }
}

randomNumber();