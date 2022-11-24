const numero = Number(prompt("tabuada do número"));
let mensagem = "";

for (let i = 0; i <= 10; i++)
{
    mensagem += `${numero} * ${i} = ${numero * i}\n`
}

alert(mensagem);