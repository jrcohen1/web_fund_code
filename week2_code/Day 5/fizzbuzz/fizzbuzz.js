//For each number between 1-100 we need to log something:
//If the number is a multiple of 3 log "Fizz"
//If the number is a multiple of 5 log "Buzz"
//If the number is a multiple of both 3 and 5 log "Fizzbuzz"
//If not logging any variation of fizz and buzz then log the number
for(var num = 1; num < 101; num++) {
    if (num % 5 == 0 && num % 3 == 0) console.log("Fizzbuzz");      //First you want to check if the  number is a multiple of both 3 and 5 using modulus
    //&& checks to see if BOTH "i % 5 === 0" and "i % 3 === 0" are true
    else if (num % 3 == 0) console.log ("Fizz");    //Next you want to check if the number is a multiple of 3 using modulus 
    else if (num % 5 == 0) console.log("Buzz");     //Then you want to see if the number is a multiple of 5 using modulus
    else console.log(num);    //The final part is that if the number isn't a multiple of either 3 or 5 or both then we have to log the number
}