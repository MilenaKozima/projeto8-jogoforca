import { useState } from "react";
import Jogo from "./Jogo"
import Letras from "./Letras";

export default  function App() {

  const [alfabeto, setAlfabeto] = useState(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
  const [imgboneco, setImagem] = useState("");

  return (
    <>
    <Jogo imgboneco={imgboneco} setImagem={setImagem}/>
    <Letras alfabeto={alfabeto} setAlfabeto={setAlfabeto}/>
    </>
  );
}

