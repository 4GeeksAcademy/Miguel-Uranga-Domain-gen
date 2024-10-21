/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //declaracion de cada uno de los arreglos a explorar
  let pronoun = ["the", "our", "my"];
  let adjective = ["great", "big", "tiny", "smidgen", "smallest", "greatest"];
  let noun = ["jogger", "racoon", "human", "cat", "dog", "game", "stadium"];
  let extension = [".com", ".co", ".gov", ".us", ".to", ".net"];
  let urlName = "";
  //exploracion de cada uno de los arrays para poder crear el nombre de dominio
  //exploracion del titulo por pronombre
  for (let pronombre = 0; pronombre < pronoun.length; pronombre++) {
    //exploracion del titulo por adjetivo
    urlName = pronoun[pronombre];
    extensionAddition(urlName, extension);

    for (let adjetivo = 0; adjetivo < adjective.length; adjetivo++) {
      //exploracion del titulo por sustantivo
      urlName = pronoun[pronombre] + adjective[adjetivo];
      extensionAddition(urlName, extension);

      for (let sustantivo = 0; sustantivo < noun.length; sustantivo++) {
        //exploracion del titulo por extension
        urlName = pronoun[pronombre] + adjective[adjetivo] + noun[sustantivo];
        extensionAddition(urlName, extension);
      }
    }
  }
  //fin del for
};

//Funcion para añadir la extension a cada una de las posibles combinaciones
function extensionAddition(urlName, extension) {
  for (let ext = 0; ext < extension.length; ext++) {
    document.getElementById("url").innerText += urlName + extension[ext] + "\n";
  }
}
