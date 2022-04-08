const buttonCriaContador = document.getElementById("criarContador");
const tipoContador = document.getElementById("tipoContador");

function criarC() {
  const contador = document.createElement("div");
  if (tipoContador.value === "") {
    return alert("Informe um tipo para contar.");
  }
  const tipo = tipoContador.value;
  contador.style.background = randomColor();
  contador.classList.add("tipoContador");
  contador.innerHTML = `
      Contador de ${tipo}: <br />
      <p class="valor" id="valor">0</p>
      <button class="button" id="zerar" onclick="zerar(event)">ZERAR</button>
      <br />
  `;
  contador.onclick = (event) => {
    incrementar(event);
  };
  document.getElementById("listaContadores").appendChild(contador);
  document.getElementById("tipoContador").value = "";
}

function randomColor() {
  return (
    "#" +
    parseInt(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0")
  );
}

const buttonZerar = document.getElementById("zerar");

function incrementar(event) {
  if (event.target.classList[0] == "listaContadores") {
    const tipo = event.target;
    const valor = tipo.children[1];
    valor.innerHTML = parseInt(valor.innerHTML) + 1;
  } else {
    const tipo = tipo.event.target.parentElement;
    const valor = tipo.children[1];
    valor.innerHTML = parseInt(valor.innerHTML) + 1;
  }
}

function zerar(event) {
  if (event.target.id === "zerar") {
    document.getElementById("valor").innerHTML = 0;
  } else if (event.target.id === "zerar2") {
    document.getElementById("valor2").innerHTML = 0;
  }
}
