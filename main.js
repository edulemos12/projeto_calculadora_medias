const form = document.getElementById('form-atividade');
let linhas = '';
const imgAprovado = '<img src="./aprovado.png" alt="emoji aprovado"';
const imgReprovado = '<img src="./reprovado.png" alt="emoji reprovado"';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite uma Nota Minima: '));


form.addEventListener("submit", function(e){

    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
})

function adicionaLinha(){
    const atividade = document.getElementById('nome')
    const nota = document.getElementById('nota')

    

    if(atividades.includes(atividade.value)){
        alert(`A Atividade ${atividade.value} já foi inserida`);
    }
    else{
        atividades.push(atividade.value);
        notas.push(parseFloat(nota.value));
    
        
        let linha = '<tr>';
        linha += `<td> ${atividade.value}</td>`;
        linha += `<td> ${nota.value}</td>`;
        linha += `<td>${nota.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }

    atividade.value = '';
    nota.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('mediaFinalValor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('mediaFinalResultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

    console.log(mediaFinal);
}

function calculaMediaFinal(){
    let somaDasNotas = 0;

    for(let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];

        
    }

    return somaDasNotas / notas.length;
}