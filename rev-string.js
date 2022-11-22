// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
  str2 = "";
  //cria uma string para receber a nova ao contrário; 
  for (i = str.length - 1; i >= 0; i--) {
    /*cria um laço for que tem i = o tamanho da string-1 pq a string começa em 0 
    o laço continua até que i seja menor que 0, ou seja, pega o str[0] que é a letra inicial 
    a cada iteração nós diminuímos 1 do valor de str.length de forma a rodar toda a string*/
    str2 += str[i];
    //str2 recebe os caracteres de str em cada indice i; 
    //e adiciona a sua string; 
    //também dava pra usar a forma expandida str2 = str2 + str[i]; 
  }
  //eu erro muito pq esqueço que uma função 
  return str2;
}

console.log(solution("world"));

//or

//Passo 1. Use o método split() para retornar um novo array
//Passo 2. Use o método reverse() para inverter o array recém-criado
//Passo 3. Use o método join() para unir todos os elementos do array em uma string
//Passo 4. Retorne a string invertida

function revString(str) {
  return str.split('').reverse().join('');
  /*
  var splitStr = str.split("");
    // ["h", "e", "l", "l", "o"]
  var revArray = splitStr.reverse();
    // ["o", "l", "l", "e", "h"]
  var str2 = revArray.join("");
    //importante lembrar das aspas para tirar os espaços e formar a palavra
    // "olleh"
  return str2;*/
}


// com recursividade

/*
function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");
*/