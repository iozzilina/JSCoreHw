function isPrime(n){
    //check for division by numbers less that sqrt of the number

    let prime = true;

    let max = Math.ceil(Math.sqrt(n));

    for(let div = 2;div<=max;div++){

        if(n==div) {continue};
        if(n%div == 0){
            prime = false;
            break;
        }
    }
    return prime && n>1;
}