

// write a program that console log the numbers 1 to n and print 'fizz' if number is multiple of three.
// print Buzz if the numbers is multiple of five a and print both fizz buzz if mutiple of three and five.

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz')
        }
        else if (i % 3 === 0) {
            console.log('fizz')
        }

        else if (i % 5 === 0) {
            console.log('buzz')
        }
        else {
            console.log(i)
        }
    }
}

    fizzBuzz(30);
