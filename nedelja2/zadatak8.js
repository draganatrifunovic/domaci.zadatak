
let n = 5;

for(let i=0; i<=n; i++) {
    let red = ' '.repeat(n-i-1) + '#'.repeat(i+1);
    console.log(red);
}