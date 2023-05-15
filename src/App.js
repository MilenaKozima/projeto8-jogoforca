import palavras from "./palavras";
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"

export default  function App() {
  return (
    <div className="Jogo">
      <img className="boneco b0" src={forca0}/>
      <img className="boneco b1 escondida" src={forca1}/>
      <div className="botIniciar">
        <button>Iniciar o jogo</button>
      </div>
    </div>
  );
}

