function ehPalindromo(str) {
    
    const normalizedStr = str.replace(/\s+/g, '').toLowerCase();
    const reversedStr = normalizedStr.split('').reverse().join('');
    return normalizedStr == reversedStr;
}
console.log(ehPalindromo("Ovo")); 
console.log(ehPalindromo("Escola")); 
console.log(ehPalindromo("Anotaram a data da maratona")); 
console.log(ehPalindromo("Roma é amor")); 

// quando as palavras tiverem o mesmo significado de trás para frente irá imprimir true.