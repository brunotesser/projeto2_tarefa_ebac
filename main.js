const form = document.getElementById("contato-atv");
const nomes = [];
const contatos = [];

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
  atualizaTabela();
});


function adicionaLinha() {
  const inputNomeContato = document.getElementById("nome-contato");
  const inputNumeroContato = document.getElementById("numero-contato");

  {
    nomes.push(inputNomeContato.value);
    contatos.push(parseFloat(inputNumeroContato.value));




    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

  }

  inputNomeContato.value = '';
  inputNumeroContato.value = '';

}

function atualizaTabela() {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
}

