import palavras from "../palavras";
import { useState } from "react";

export default function Jogo(props) {

    let {erros, setErros, desabilita, setDesabilita, palavraSorteada, setPalavraSorteada, palavraunder, setPalavraUnder, letrasSelecionadas, setLetrasSelecionadas, imagens} = props;

    function apertouescolher() {

        setDesabilita(false);
        setLetrasSelecionadas([]);

        const numero = Math.floor(Math.random() * palavras.length);
        
        const palavra = palavras[numero];

        const palavraAr = palavra.split('');

        setPalavraSorteada(palavraAr);

        palavraunder = palavraAr.map(letra =>' _');
        setPalavraUnder(palavraunder);

        console.log(palavras[numero]);
        console.log(imagens[0]);
        console.log(erros);
    }

    return (
        <div className="jogo">
            <img data-test="game-image" className="boneco" src={imagens[erros]} />
            <div className="organizar">
                <div className="botIniciar">
                    <button data-test="choose-word" onClick={apertouescolher}>ESCOLHER PALAVRA</button>
                </div>
                <h1 data-test="word">{palavraunder}</h1>
            </div>
        </div>
    );
}