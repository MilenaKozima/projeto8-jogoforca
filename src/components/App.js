import { useState } from "react";
import Jogo from "./Jogo"
import Letras from "./Letras";
import forca0 from "../assets/forca0.png"
import forca1 from "../assets/forca1.png"
import forca2 from "../assets/forca2.png"
import forca3 from "../assets/forca3.png"
import forca4 from "../assets/forca4.png"
import forca5 from "../assets/forca5.png"
import forca6 from "../assets/forca6.png"


export default  function App() {

  const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]

  const [alfabeto, setAlfabeto] = useState(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
  const [desabilita, setDesabilita] = useState(true);
  const [palavraSorteada, setPalavraSorteada] = useState("");
  let [palavraunder, setPalavraUnder] = useState([]);
  let [letrasSelecionadas, setLetrasSelecionadas] = useState([...alfabeto]);
  let [erros, setErros] = useState(0);


  return (
    <>
    <Jogo desabilita={desabilita} setDesabilita={setDesabilita} 
    palavraSorteada={palavraSorteada} setPalavraSorteada={setPalavraSorteada} palavraunder={palavraunder} setPalavraUnder={setPalavraUnder}
    letrasSelecionadas={letrasSelecionadas}
    erros={erros}
    setErros={setErros}
    imagens={imagens}
    setLetrasSelecionadas={setLetrasSelecionadas}/>
    <Letras 
    alfabeto={alfabeto} 
    setAlfabeto={setAlfabeto} 
    desabilita={desabilita} 
    setDesabilita={setDesabilita} 
    palavraSorteada={palavraSorteada} 
    setPalavraSorteada={setPalavraSorteada} 
    palavraunder={palavraunder} 
    setPalavraUnder={setPalavraUnder}
    letrasSelecionadas={letrasSelecionadas}
    setLetrasSelecionadas={setLetrasSelecionadas}
    erros={erros}
    setErros={setErros}
    />
    </>
  );
}

