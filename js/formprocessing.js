$(document).ready(function() {
    $('form#sieve').submit(function(event) {
        var number = $('input#number').val();
        var allPrimes = primes(number);

        /* If we got some primes, print them in a list.
        ** Otherwise, show an apologetic message. */
        if (allPrimes.length !== 0) {

            $('#result').empty();
            allPrimes.forEach(function(prime) {
                $('#result').append("<li>" + prime + "</li>");
            });
        } else {
            $('#result').text("No primes found!!!!");
        }

        $('#result').show();
        event.preventDefault();
    });
});
