import React from 'react';
import Imagem from '../assets/img/doguito404.svg';
import '../assets/css/404.css';

const Pagina404 = () =>{
    return(
        <main className="container flex flex--centro flex--coluna">
            <img className="doguito-imagem" src={Imagem}></img>
            <p className="naoencontrado-texto">Ooops, esta página não existe.</p>
        </main>
    );
}

export default Pagina404;