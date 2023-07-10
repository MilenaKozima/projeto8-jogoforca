export default function Letras(props) {

    let { alfabeto, setAlfabeto, imgboneco, setImagem, desabilita, setDesabilita, palavraSorteada, setPalavraSorteada, palavraunder, setPalavraUnder, letrasSelecionadas, setLetrasSelecionadas, erros, setErros} = props;

    function selecionarLetras(letra) {
        console.log(letra);
        setLetrasSelecionadas([...letrasSelecionadas, letra]);
        console.log(letrasSelecionadas);

        if (palavraSorteada.includes(letra)){
            console.log("Acertou");
        }else{
            let novoerro = erros++;
            setErros(novoerro);
            console.log(erros);
        }
    }

    return (
        <div className="letras">
            {alfabeto.map((alf =>
                (<button
                data-test="letter" 
                onClick={() => selecionarLetras(alf)} 
                className="letters" 
                key={alf} 
                disabled={letrasSelecionadas.includes(alf)}>
                    {alf}
                </button>)
            ))};
        </div>
    );
}