function colorfulNumbers(n){

    let result = '<ul>\n';  

for (var i = 1; i <= n; i++) {

    let color = i%2==0 ? 'blue' : 'green';
    
    result += `<li><span style=\'color:${color}\'>${i}</span></li>\n`;
}
  
    result += '</ul>\n';

    return result;
}


colorfulNumbers(4);