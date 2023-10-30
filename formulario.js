'use restrict'; 

const limparFormulario = (endereco) =>{
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';

}
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);


const preencherFormulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;


const  pesquisarCep = async() => {
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;

    if(cepValido(cep.value)){
      const dados = await fetch(url);
      const addres = await dados.json();
      
       if(addres.hasOwnProperty('erro')){
        alert('cep não encontrado');
       }else{
           preencherFormulario(addres);
       }
    }else{
        alert('cep incorreto')
    }
}

document.getElementById('cep').addEventListener('focusout',pesquisarCep); }