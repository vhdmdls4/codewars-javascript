/*Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

*/
/*
function basicOp(operation, value1, value2) {
  var loperation = `${value1}${operation}${value2}`;
  let trocado = eval(loperation);
  //eval não é bom pra usar no html por conta de boas práticas de segurança;
  return trocado;
}
*/

//switch é o mais indicado

function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

/*
function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2;
      break;

    case '-':
      return value1 - value2;
      break;

    case '*':
      return value1 * value2;
      break;

    case '/':
      return value1 / value2;
      break;
  }
}
*/
