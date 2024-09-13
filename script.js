const form = document.getElementById('form-contato');
const contatos = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit',function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();

})

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if(telefone.includes(inputTelefoneContato.value) && contatos.includes(inputNomeContato.value) ){
        alert(`O contato ${inputNomeContato.value} de tel: ${inputTelefoneContato.value} já existe na agenda! `)
    }else{
        contatos.push(inputNomeContato.value);
        telefone.push(inputTelefoneContato.value);

        let linha = '<tr>'
        linha += `<td> ${inputNomeContato.value}</td>`
        linha += `<td> ${inputTelefoneContato.value}</td>`
        linha += `</tr>`
        

        linhas += linha
        
    }

    inputNomeContato.value = '';
    inputTelefoneContato.value ='';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}