import palavras from "../palavras";
import forca0 from "../assets/forca0.png"
import forca1 from "../assets/forca1.png"
import forca2 from "../assets/forca2.png"
import forca3 from "../assets/forca3.png"
import forca4 from "../assets/forca4.png"
import forca5 from "../assets/forca5.png"
import forca6 from "../assets/forca6.png"

export default function Jogo(props) {
    
    const{imgboneco, setImagem} = props

    return (
        <div className="jogo">
            <img className={`boneco ${imgboneco}`} src={forca0} />
            <div className="botIniciar">
                <button disabled>Iniciar o jogo</button>
            </div>
        </div>
    );
}