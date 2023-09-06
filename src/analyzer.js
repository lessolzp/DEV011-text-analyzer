const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //const text = document.querySelector("textarea").value;
    const textwoSpecCar = text.replace(/[,.,;:"«»{}[\]()¿?¡!-]+/g,"");
    const textarray = textwoSpecCar.split(" ");
    const textarrayNoSpace = textarray.filter(function(value){
      return value !=="";
    });
    const cont = textarrayNoSpace.length;
    return cont;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    //text = document.querySelector("textarea").value;
    const cont = text.length;
    return cont;
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    //const text = document.querySelector("textarea").value;
    const textwoSpecCar = text.replace(/[,.,;:"«»{}[\]()¿?¡!-]+/g,"");
    const textarray = textwoSpecCar.split(" ");
    const textarrayNoSpace = textarray.filter(function(value){
      return value !=="";
    });
    let cont = 0;
    for(let i=0; i < textarrayNoSpace.length; i++){
      cont += textarrayNoSpace[i].length;
    }
    return cont;
    
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //const text = document.querySelector("textarea").value;
    const textarray= text.split(" ");
    const textarrayNoSpace = textarray.filter(function(value){
      return value !=="";
    });
    let carCount=0;
    let wordCount=0;
    let prom;
    textarrayNoSpace.forEach(function(a){
      const prueba = /[a-zA-Z0-9]+/.test(a);
      if (prueba === true) {
        carCount += a.length;
        wordCount += 1;
        prom = carCount/wordCount
      }
    });
    if (wordCount!== 0){
      prom = prom.toFixed(2);
      return parseFloat(prom);}
    else {return 0 }
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  //const text = document.querySelector("textarea").value;
    const textarray = text.split(" ");
    const textnum = textarray.map(function(i) {
      if (!isNaN(i)) {
        return i;}
      else {return ""}
    });
    const numbers = textnum.filter(function(value) {
      return value !== "";
    });
    const cont = numbers.length;
    return cont;
  },
  
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    //const text = document.querySelector("textarea").value;
    const textarray = text.split(" ");
    //console.log(textarray);
    const textnum = textarray.map(function(i) {
      if (!isNaN(i)) {
        return i;}
      else {return ""}
    });
    //console.log(textnum);
    const numbers = textnum.filter(function(value) {
      return value !== "";
    });
    //console.log(numbers);
    let sum=0;
    numbers.forEach(function(a){
      a = Number.parseFloat(a);
      sum += a;
    });
    //console.log(sum);
  
    return sum;
  },
};

export default analyzer;
