const buttonCriaContador = document.getElementById("criarContador");
const tipoContador = document.getElementById("tipoContador");
const buttonZerar = document.getElementById("zerar");

function criarC() {
  const contador = document.createElement("div");
  if (tipoContador.value === "") {
    return alert("Informe um tipo para contar.");
  }
  const tipo = tipoContador.value;
  contador.style.background = randomColor();
  contador.classList.add("tipoContador");
  //onclick="incrementar(event)
  contador.innerHTML = `
  <div class="caixa" ">
  Contador ${tipo}: <br />
  <p class="valor" id="valor">0</p>
  <button class="button" id="zerar" onclick="zerar(event)">ZERAR</button>
  <br />
</div>
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

function incrementar(event) {
  console.log(event);
  console.log(event.target);
  if (event.target.classList[0] == "caixa") {
    const item = event.target;
    console.log(item);
    const count = item.children[1];
    count.innerHTML = parseInt(count.innerHTML) + 1;
  } else {
    const item = event.target.parentElement;
    const count = item.children[1];
    count.innerHTML = parseInt(count.innerHTML) + 1;
  }
}

function zerar(event) {
  const item = event.target.parentElement;
  const count = item.children[1];
  count.innerHTML = "-1";
}
