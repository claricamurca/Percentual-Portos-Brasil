const portosPorEstado = [
  0, 0, 1, 1, 1, 3, 1, 0, 2, 0, 1, 0, 0, 0, 3, 1, 2, 2, 0, 5, 2, 3, 1, 1, 4,
  2, 0, 0];

// Variável para armazenar o número total de portos públicos
let totalPortos = 0;

// Loop para somar o número de portos públicos de todos os estados
for (let i = 1; i < portosPorEstado.length; i++) {
  totalPortos += portosPorEstado[i];
}

function atualizarPorcentagem() {
  const select = document.getElementById("estado");
  const index = select.selectedIndex;
  let nomeEstado;
  let porcentagem;

  if (index == 0) {
    document.getElementById("porcentagem").innerHTML = "";
    for (let i = 1; i < portosPorEstado.length; i++) {
      porcentagem = (portosPorEstado[i] / totalPortos) * 100;
      nomeEstado = getNomeEstado(i);
      document.getElementById(
        "porcentagem"
      ).innerHTML += `${nomeEstado} = ${porcentagem.toFixed(2)}% <br>`;
    }
  } else {
    porcentagem = (portosPorEstado[index] / totalPortos) * 100;
    nomeEstado = getNomeEstado(index);
    document.getElementById(
      "porcentagem"
    ).textContent = `O estado ${nomeEstado} tem ${
      portosPorEstado[index]
    } porto(s), isso representa 
    ${porcentagem.toFixed(
      2
    )}% do total de portos públicos organizados do Brasil.`;
  }
}

function getNomeEstado(index) {
  switch (index) {
    case 0:
      return "Todos os Estados";
    case 1:
      return "Acre";
    case 2:
      return "Alagoas";
    case 3:
      return "Amapá";
    case 4:
      return "Amazonas";
    case 5:
      return "Bahia";
    case 6:
      return "Ceará";
    case 7:
      return "Distrito Federal";
    case 8:
      return "Espírito Santo";
    case 9:
      return "Goiás";
    case 10:
      return "Maranhão";
    case 11:
      return "Mato Grosso";
    case 12:
      return "Mato Grosso do Sul";
    case 13:
      return "Minas Gerais";
    case 14:
      return "Pará";
    case 15:
      return "Paraíba";
    case 16:
      return "Paraná";
    case 17:
      return "Pernambuco";
    case 18:
      return "Piauí";
    case 19:
      return "Rio de Janeiro";
    case 20:
      return "Rio Grande do Norte";
    case 21:
      return "Rio Grande do Sul";
    case 22:
      return "Rondônia";
    case 23:
      return "Roraima";
    case 24:
      return "Santa Catarina";
    case 25:
      return "São Paulo";
    case 26:
      return "Sergipe";
    case 27:
      return "Tocantins";
  }
}