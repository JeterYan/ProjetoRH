function somar() {
    let salarioBruto = parseFloat(document.getElementById("quantity").value)
    let inss = 0.11
    let irrf = 0.275
    let descontoInss = salarioBruto * inss
    let baseIrrf = salarioBruto - descontoInss
    salarioBruto = salarioBruto - descontoInss
    
    let result = `A soma dos seus impostos são, INSS ${descontoInss}R$, IRRF ${baseIrrf}R$, Salario Bruto ${salarioBruto}R$`

    document.getElementById("result").innerHTML = result
}
$(document).ready(function () {
    $("[data-dropdown-name]").click(function () {
      openDropdown($(this));
    });
  
    function openDropdown(element) {
      var dropdown = element.data("dropdown-name");
      var dropdownList = $("[data-dropdown-list='" + dropdown + "']");
      dropdownList.toggle(); // Toggle the visibility of the dropdown
    }
  });
  
