    function showAlert() {
        alert("ola");
    }
    console.log("Hello, World!");

const nome = "Biblioteca do Bairro";
const morada = "Rua das Flores, 123";
let livros = 1250;
livros = livros - 3;
console.log(nome);
console.log(livros);
console.log(morada);
console.log(`O nome da biblioteca é ${nome} e possui ${livros} livros.`);
console.log(typeof nome);
console.log(typeof livros);
console.log(morada.toUpperCase());
console.log("-----------------exercicio1-----------------");


const dia = "sábado"; 
const hora = 11;
let aberta;


if (dia === "domingo") {
    aberta = false;
} else if (dia === "sábado") {
    aberta = hora >= 10 && hora < 13;
} else {
    aberta = hora >= 9 && hora < 19;
}
console.log(`A biblioteca está aberta? ${aberta ? 'Aberto' : 'Fechado'}`);
console.log("-----------------exercicio2-----------------");


const dia1 = "sábado";
const hora1 = 11;
let aberta1;
if (dia1 === "domingo") {
aberta = false;
} else if (dia1 === "sábado") {
aberta = hora1 >= 10 && hora1 < 13;
} else {
aberta = hora1 >= 9 && hora1 < 19;
}
console.log(aberta1 ? "Aberta" : "Fechada");
console.log("-----------------exercicio3-----------------");

function calcularMulta(dias) {
return dias > 15 ? (dias - 15) * 0.5 : 0;
}
function formatarEuros(valor) {
return valor.toFixed(2).replace(".", ",") + " €";
}
function mensagemMulta(dias) {
const multa = calcularMulta(dias);
if (multa === 0) return "Sem multa";
return `Multa a pagar: ${formatarEuros(multa)}`;
}
console.log(mensagemMulta(10));
console.log(mensagemMulta(22));
// Sem multa
// Multa a pagar: 3,50 €
console.log("-----------------exercicio4-----------------");

const livros1 = ["Os Maias", "Mensagem", "A Sibila",
"Os Lusíadas", "Aparição"];

livros1.push("Memorial do Convento", "Ensaio sobre a Cegueira");

console.log(livros1.length);

livros1.forEach((titulo, i) => {
    console.log(`${i + 1}. ${titulo}`);
});

const longos = livros1.filter(t => t.length > 10);

const maiusculas = livros1.map(t => t.toUpperCase());

console.log(longos, maiusculas);

console.log("-----------------exercicio5-----------------");

const catalogo1 = [
    {titulo: "Os Maias", autor: "Eça de Queirós", ano: 1888, disponivel: true},
    {titulo: "Mensagem", autor: "Fernando Pessoa", ano: 1934, disponivel: true},
    {titulo: "A Cidade e as Serras", autor: "Eça de Queirós", ano: 1901, disponivel: false},
    {titulo: "Amor de Perdição", autor: "Camilo Castelo Branco", ano: 1862, disponivel: true},
    {titulo: "Os Lusíadas", autor: "Luís de Camões", ano: 1572, disponivel: false},
    {titulo: "A Sibila", autor: "Agustina Bessa-Luís", ano: 1954, disponivel: true},
];


// EXERCÍCIO 1 - Mostrar todos os livros

let text = "";

for (let livro of catalogo1) {
    text += livro.titulo + " - " + livro.autor + " (" + livro.ano + ")\n";
}

console.log("---------- CATÁLOGO ----------");
console.log(text);


// EXERCÍCIO 2 - Contar livros disponíveis

let contador = 0;

for (let livro of catalogo1) {
    if (livro.disponivel === true) {
        contador++;
    }
}

console.log("Livros disponíveis: " + contador);


// EXERCÍCIO 3 - Encontrar o livro mais antigo

let livroantigo = catalogo1[0];

for (let livro of catalogo1) {
    if (livro.ano < livroantigo.ano) {
        livroantigo = livro;
    }
}

console.log("---------- LIVRO MAIS ANTIGO ----------");
console.log(livroantigo);


// EXERCÍCIO 4 - Emprestar um livro

function emprestar(titulo) {

    for (let livro of catalogo1) {

        if (livro.titulo === titulo) {

            if (livro.disponivel === true) {
                livro.disponivel = false;
                console.log("Livro emprestado com sucesso!");
            } else {
                console.log("O livro está indisponível.");
            }

            return;
        }
    }

    console.log("Livro não encontrado.");
}
console.log("-----------------exercicio6-----------------");
