function calcularRescisao() {
    const salario = parseFloat(document.getElementById("salario").value);
    const tempo = parseInt(document.getElementById("tempo").value);
  
    const saldoSalario = (salario / 30) * tempo;
    const feriasProporcionais = (salario / 12) * tempo;
    const decimoProporcional = (salario / 12) * tempo;
    const multaFGTS = (salario + feriasProporcionais + decimoProporcional) * 0.4;
    const total = saldoSalario + feriasProporcionais + decimoProporcional + multaFGTS;
  
    document.getElementById("saldoSalario").textContent = `R$ ${formatarValor(saldoSalario)}`;
    document.getElementById("feriasProporcionais").textContent = `R$ ${formatarValor(feriasProporcionais)}`;
    document.getElementById("decimoProporcional").textContent = `R$ ${formatarValor(decimoProporcional)}`;
    document.getElementById("multaFGTS").textContent = `R$ ${formatarValor(multaFGTS)}`;
    document.getElementById("total").textContent = `R$ ${formatarValor(total)}`;
  }
  
  function formatarValor(valor) {
    return valor.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  