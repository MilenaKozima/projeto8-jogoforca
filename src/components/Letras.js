export default function Letras(props){

    return(
        <div className="letras">
            {props.alfabeto.map((alf => 
                <button className="letters">
                    {alf}
                </button>
                ))};
        </div>
    );
}