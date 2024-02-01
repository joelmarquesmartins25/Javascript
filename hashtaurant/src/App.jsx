import { useState } from "react";
import "./App.css";
import Hashtaurant from "./assets/hashtaurante.webp";
import { Navegacao } from "./Navegacao";
import { ItemCardapio } from "./ItemCardapio";
import { pratosPrincipais, sobremesas, bebidas } from './cardapio.js';

export function App() {
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);
  return <>
      <img src={Hashtaurant} className="capa" />
      <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>
      <div className="menu">
        { paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} preco={item.preco} descricao={item.descricao} imagem={item.imagem}/>) }
      </div>
    </>
}