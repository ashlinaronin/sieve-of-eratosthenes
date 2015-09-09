describe('primes', function() {
    it("handles the smallest prime number, 2", function() {
        expect(primes(2)).to.eql([2]);
    });

    it("handles all primes under 7", function() {
        expect(primes(7)).to.eql([2,3,5,7]);
    });

    it("handles all primes under 30", function() {
        expect(primes(30)).to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    });

    it("handles all primes under 100", function() {
        expect(primes(100)).to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
    });

    it("handles negative numbers", function() {
        expect(primes(-1)).to.eql([]);
    });

    it("handles 1", function() {
        expect(primes(1)).to.eql([]);
    });

    it("handles large negative numbers", function() {
        expect(primes(-999)).to.eql([]);
    });

    it("handles zero", function() {
        expect(primes(0)).to.eql([]);
    });
});

describe('numberList', function() {
    it("displays a list of numbers from 2 to n", function() {
        expect(numberList(3)).to.eql([2, 3]);
    });

    it("displays a larger list of numbers from 2 to n", function() {
        expect(numberList(10)).to.eql([2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
});
