 function calc() {
     const n1 = parseFloat(document.getElementById('n1').value);
     const n2 = parseFloat(document.getElementById('n2').value);
     const opera = document.getElementById('operators').value;
     if (opera === "+") {
         const result = document.getElementById('result').value = n1 + n2
     }
     if (opera === '-') {
         const result = document.getElementById('result').value = n1 - n2
     }
     if (opera === '*') {
         const result = document.getElementById('result').value = n1 * n2
     }
     if (opera === '/') {
         const result = document.getElementById('result').value = n1 / n2
     }
 }