"use strict";
const botaoAtualizar = document.getElementById("atualizar-saldo");
const botaoLimpar = document.getElementById("limpar-saldo");
const campoSaldo = document.getElementById("campo-saldo");
const somaInput = document.getElementById("soma");
if (campoSaldo)
    campoSaldo.innerHTML = "0";
function somarAoSaldo(soma) {
    if (campoSaldo) {
        const saldoAtual = parseInt(campoSaldo.innerHTML);
        if (!isNaN(saldoAtual)) {
            campoSaldo.innerHTML = (saldoAtual + soma).toString();
        }
    }
}
function limparSaldo() {
    if (campoSaldo)
        campoSaldo.innerHTML = "0";
}
botaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.addEventListener("click", function () {
    if (somaInput) {
        const valorSoma = parseFloat(somaInput.value);
        if (!isNaN(valorSoma)) {
            somarAoSaldo(valorSoma);
        }
    }
});
botaoLimpar === null || botaoLimpar === void 0 ? void 0 : botaoLimpar.addEventListener("click", function () {
    limparSaldo();
});
/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */
