function calcularFerias() {
    var salarioBruto = parseFloat(document.getElementById("salarioBruto").value);
    var salarioComFerias = salarioBruto + (salarioBruto / 3);

    document.getElementById("resultado").innerHTML = `
        Salário com 1/3 de férias: R$ ${salarioComFerias.toFixed(2)}
    `;
}
