import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function HeroBlock() {
    return (
        <div className="hero-img text-start p-5 text-white" style={{borderRadius: "0 0 20px 20px"}}>
            <div className="col-md-5 px-0">
              <h1 className="display-4 fst-italic">Feliz como Ecolombriz...</h1>
              <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
              <button className="btn btn-outline-light"><a href="#" className="text-white fw-bold">Anotate aquí!</a></button>
            </div>
        </div>
    );
}

export default HeroBlock;