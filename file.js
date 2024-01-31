const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul= document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Actualizar texto de los parrafos
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actualizarColor(rojo , verde , azul) {
  // Plantillas literales para reemplazar valores de variables directamente dentro de la cadena de caracteres 
  const colorRGB = `rgb(${rojo},${verde},${azul})`;
  document.body.style.backgroundColor = colorRGB;
}

// Para actualizar red
inputRojo.addEventListener('change' , (e) => {
  rojo = e.target.value;
  textoRojo.innerText = rojo;
  actualizarColor(rojo , verde , azul)
});
// Actualizar verde
inputVerde.addEventListener('change' , (e) => {
  // Otra opcion en lugar del evento e.target,utilizar variable global verde = inputVerde.value
  verde = e.target.value;
  textoVerde.innerText = verde;
  actualizarColor(rojo , verde , azul)
});
// Actualizar azul
inputAzul.addEventListener('change' , (e) => {
  azul = e.target.value;
  textoAzul.innerText = azul;
  actualizarColor(rojo , verde , azul)
});