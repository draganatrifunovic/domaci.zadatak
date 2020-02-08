let n = 16;

for(let i = 0; i<=100; i++) {
    if(n%3==0 && n%5==0) {
        console.log('FizzBuzz');
    } else if(n%3==0) {
        console.log('Fizz');
    } else if(n%5==0) {
        console.log('Buzz');
    } else if (n%3!==0 && n%5!==0) {
        console.log(i);
    }
}