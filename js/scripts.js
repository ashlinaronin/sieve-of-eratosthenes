var numberList = function(number) {
    var numberArray = [];

    for (var i = 2; i <= number; i++) {
        numberArray.push(i);
    }

    return numberArray;
};

var primes = function(number) {
    var primes = [2];
    var allNumbers = numberList(number);

    // Loop through all primes that might have a multiple
    for(var prime = 2; prime <= (number/prime); prime++) {

        // Remove all multiples of this prime from the number list
        for (var indexToCheck = 0; indexToCheck < allNumbers.length; indexToCheck++) {
            if ((allNumbers[indexToCheck] % prime === 0) && (allNumbers[indexToCheck] !== prime)) {
                allNumbers.splice(indexToCheck, 1);
            }
        }
    }

    return allNumbers;
}
