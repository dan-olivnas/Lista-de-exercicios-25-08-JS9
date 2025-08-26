import leia from "readline-sync";

let codigo, quantidade, precoUnit, valorTotal, produto
codigo = leia.questionInt('Digite o codigo do produto: ');
quantidade = leia.questionInt('Digite a quantidade: ');

switch (codigo) {
    case 1:
    produto = 'Cachorro Quente';
    precoUnit = 10;
    valorTotal = quantidade * precoUnit;
    console.log('Produto selecionado: ', produto);
    console.log('Valor total da compra: R$ ', valorTotal);
    break;

    case 2:
    produto = 'X-Salada';
    precoUnit = 15;
    valorTotal = quantidade * precoUnit;
    console.log('Produto selecionado: ', produto);
    console.log('Valor total da compra: R$ ', valorTotal);
    break;

    case 3:
    produto = 'X-Bacon';
    precoUnit = 18;
    valorTotal = quantidade * precoUnit;
    console.log('Produto selecionado: ', produto);
    console.log('Valor total da compra: R$ ', valorTotal);
    break;

    case 4:
    produto = 'Bauru';
    precoUnit = 12;
    valorTotal = quantidade * precoUnit;
    console.log('Produto selecionado: ', produto);
    console.log('Valor total da compra: R$ ', valorTotal);
    break;

    case 5:
    produto = 'Refrigerante';
    precoUnit = 8;
    valorTotal = quantidade * precoUnit;
    console.log('Produto selecionado: ', produto);
    console.log('Valor total da compra: R$ ', valorTotal);
    break;

    case 6:
    produto = 'Suco de laranja';
    precoUnit = 13;
    valorTotal = quantidade * precoUnit;
    console.log('Produto selecionado: ', produto);
    console.log('Valor total da compra: R$ ', valorTotal);
    break;

    default:
        console.log('Opção invalida! Somente de 1 a 6.');
}