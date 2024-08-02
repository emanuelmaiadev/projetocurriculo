let n1 = Number(prompt("Digite a primeira nota:"));
let n2 = Number(prompt("Digite a segunda nota:"));
let n3 = Number(prompt("Digite a terceira nota:"));

let p1 = Number(prompt("Digite o peso da primeira nota:"));
let p2 = Number(prompt("Digite o peso da segunda nota:"));
let p3 = Number(prompt("Digite o peso da terceira nota:"));

let media = (n1 * p1 + n2 * p2 + n3 * p3) / (p1 + p2 + p3);

console.log("A média ponderada das notas é:", media);
