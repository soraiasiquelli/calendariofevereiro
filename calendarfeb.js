

function feriadoExp() {
  var divExp = document.createElement("div"); /*CRIANDO DIV NOVA*/
  var exp = document.createTextNode("DESCRIÇÃO DE EVENTOS/FERIADOS: 20/02 - Carnaval, 21/02 - Carnaval, 22/02 - Quarta-feira de Cinzas"); /*CRIANDO TEXTO QUE VAI CONTER NA DIV*/
  divExp.appendChild(exp); //adiciona o nó de texto à nova div criada 
  /*NA DIV CRIADA VAI CONTER O TEXTO CRIADO*/

  // adiciona o novo elemento criado e seu conteúdo ao DOM
  var divAtual = document.getElementById("div1");
  document.body.insertBefore(divExp, divAtual);


  divExp.style.display = 'block'
}
