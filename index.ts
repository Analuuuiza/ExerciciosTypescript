let numero: number = 200;
let segundoNumero: number = 100;

console.log(numero + segundoNumero);

let idade: number = 16;
let texto: string = "Minha idade é: " + idade;

console.log(texto);

let idadeNova: number = 16;
let textoNovo: string = "Minha idade é: ";

console.log(textoNovo + (idadeNova + numero));

let verdadeiro: boolean = true;

console.log(verdadeiro);

let arr: number[] = [1,2,3,4,10,50,60];

console.log(arr);
console.log("tamanho do array: " + arr.length);
console.log("acessando a posição do array: " + arr[5]);
console.log(arr.indexOf(2));

let arrayTexto: Array<string>;

arrayTexto = ['ab', 'bc', 'cd', 'de'];  

console.log(arrayTexto);
console.log(arrayTexto.length);
console.log(arrayTexto.indexOf('ab'));

function exibirTexto(){
    console.log('Exibindo meu texto');
}

exibirTexto();

function exibirOutroTexto(){
    return "Exibindo outro texto";
}

console.log(exibirOutroTexto());

function retornaNumero(): number{
    return 10;
}

console.log(retornaNumero());

function retornaTexto(): string{
    return "retornando string";
}

console.log(retornaTexto());

function soma(a: number, b: number): number{
    return a + b;
}

console.log("O valor da soma é: " + soma(2,3));



function multiplicacao(a: number, b: number): number{
    return a * b;
}

console.log("O valor da multiplicação é: " + multiplicacao(5,3));


function parametros(a: number, b: number, c: number): number{
    return (a + b) * c;
}

console.log("O parâmetro é: " + parametros(2,3,4));

function resultado(a:number, b: number): string{

    return "O resultado da multiplicação é: " + (a * b);
}

console.log(resultado(4,10));