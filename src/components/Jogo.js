import palavras from "../palavras";
import forca0 from "../assets/forca0.png"
import forca1 from "../assets/forca1.png"
import forca2 from "../assets/forca2.png"
import forca3 from "../assets/forca3.png"
import forca4 from "../assets/forca4.png"
import forca5 from "../assets/forca5.png"
import forca6 from "../assets/forca6.png"
import { useState } from "react";

export default function Jogo(props) {

    const { imgboneco, setImagem, desabilita, setDesabilita, palavraSorteada, setPalavraSorteada} = props;
    let [palavraunder, setPalavraUnder] = useState([]);

    function apertouescolher() {

        setDesabilita(false);

        const numero = Math.floor(Math.random() * palavras.length);
        const palavra = palavras[numero];
        setPalavraSorteada(palavra);

        const palavraAr = palavra.split('');

        palavraunder = palavraAr.map(letra =>' _');
        setPalavraUnder(palavraunder);


        console.log(palavras[numero]);
    }

    return (
        <div className="jogo">
            <img className={`boneco ${imgboneco}`} src={forca0} />
            <div className="organizar">
                <div className="botIniciar">
                    <button onClick={apertouescolher}>ESCOLHER PALAVRA</button>
                </div>
                <h1>{palavraunder}</h1>
            </div>
        </div>
    );
}