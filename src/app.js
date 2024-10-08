/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our", "my"];
  let adj = ["great", "big", "tiny", "smidgen", "smallest", "greatest"];
  let noun = ["jogger", "racoon", "human", "cat", "dog", "game", "stadium"];
  let extension = [".com", ".co", ".gov", ".us", ".to", ".net"];

  console.log("Here are all the combinations!");
  //exploracion de cada uno de los arrays para poder crear el nombre de dominio
  //exploracion del titulo por pronombre
  for (let pronombre = 0; pronombre < pronoun.length; pronombre++) {
    //exploracion del titulo por adjetivo
    for (let adjetivo = 0; adjetivo < adj.length; adjetivo++) {
      console.log(pronoun[pronombre] + "." + adj[adjetivo]);
      //exploracion del titulo por sustantivo
      for (let sustantivo = 0; sustantivo < noun.length; sustantivo++) {
        console.log(
          pronoun[pronombre] + adj[adjetivo] + "." + noun[sustantivo]
        );
        //exploracion del titulo por extension
        for (let ext = 0; ext < extension.length; ext++) {
          console.log(
            pronoun[pronombre] +
              adj[adjetivo] +
              noun[sustantivo] +
              extension[ext]
          );
          document.getElementById("url").innerText +=
            pronoun[pronombre] +
            adj[adjetivo] +
            noun[sustantivo] +
            extension[ext] +
            "\n";
        }
      }
    }
  }
  //fin del for
};
