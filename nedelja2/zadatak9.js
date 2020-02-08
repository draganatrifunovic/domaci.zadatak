let red = '';
let n = 5;
for(let i=0; i<n; i++) {
    red += ' '.repeat(n-i-1) + '#'.repeat(i+1) + ' ' + '#'.repeat(i+1) + '\n';
    
}
console.log(red);