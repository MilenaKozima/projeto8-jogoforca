export default function Letras(props){

    const {alfabeto, setAlfabeto, desabilita, setDesabilita} = props;

    return(
        <div className="letras">
            {alfabeto.map((alf => 
                <button className="letters" key={alf} disabled={desabilita}>
                    {alf}
                </button>
                ))};
        </div>
    );
}