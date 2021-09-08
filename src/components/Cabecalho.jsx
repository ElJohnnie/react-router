import React from 'react';
import Imagem from '../assets/img/doguito.svg';
import '../assets/css/componentes/cabecalho.css';
const Cabecalho = () => {
    return(
        <header className="cabecalho container">
            <div className="menu-hamburguer">
                <span className="menu-hamburguer__icone"></span>
            </div>
            <div className="cabecalho--container">
                <a href="/" className="flex flex--centro">
                    <img className="cabecalho__logo" src={Imagem} alt="Logo doguito" />
                    <h1 className="cabecalho__titulo">Pet-Shop</h1>
                </a>
            </div>
            <nav className="menu-cabecalho">
                <ul className="menu-itens">
                    <li>
                        <a className="menu-item menu-item--entrar" href="#">Entrar</a>
                    </li>
                    <li>
                        <a className="menu-item" href="#">Produtos</a>
                    </li>
                    <li>
                        <a className="menu-item" href="/">Blog</a>
                    </li>
                    <li>
                        <a className="menu-item" href="/sobre">Sobre</a>
                    </li>
                </ul>
            </nav>
            <div className="menu-cabecalho-background">

            </div>
        </header>
    );
}

export default Cabecalho;