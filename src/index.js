import analyzer from './analyzer.js';

// Llamar las variables que se necesitan para los métodos
const text = document.querySelector("textarea[name='user-input']");
const btn = document.getElementById("reset-button");


// Funciones que van a invocar los objetos
//Contador de palabras
function invocar(){
  const contWord = analyzer.getWordCount(text.value);
  document.querySelector("li[data-testid='word-count']").innerHTML = `Palabras: ${contWord}`; 
  const contCar = analyzer.getCharacterCount(text.value);
  document.querySelector("li[data-testid='character-count']").innerHTML = `Caracteres: ${contCar}`; 
  const contCarExSpa = analyzer.getCharacterCountExcludingSpaces(text.value);
  document.querySelector("li[data-testid='character-no-spaces-count']").innerHTML = `Caracteres sin espacios: ${contCarExSpa}`;
  const avWordLen = analyzer.getAverageWordLength(text.value);
  document.querySelector("li[data-testid='word-lenght-average']").innerHTML = `Promedio de palabras: ${avWordLen}`;
  const contNum = analyzer.getNumberCount(text.value);
  document.querySelector("li[data-testid='number-count']").innerHTML = `Numeros: ${contNum}`;
  const sumNum = analyzer.getNumberSum(text.value);
  document.querySelector("li[data-testid='number-sum']").innerHTML = `Suma de numeros: ${sumNum}`;
}

function clearContent(){
  location.reload();
}


//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

btn.addEventListener('click',clearContent);
text.addEventListener('keyup',invocar);