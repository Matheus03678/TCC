import React from "react";
import "./main.css";

import Warrap_cards from "../warrap-cards/warrap.jsx"

const main = () => {
  return (
    <main className="main">
      <section className="section-header">
        <p> -- a sua ajuda é muito importante</p>
        <h1>Doe ;3</h1>
        <p>500 pessoas já doaram</p>

        <div className="warrap-button-mensager">
          <div className="warrap-buttons">
            <div className="buttons">'{"<"}'-</div>
            <div className="buttons">-'{">"}'</div>
          </div>
          <div className="warrap-mensager">
            <i className="fa fa-money"></i>
            <p>Milhares de pessoas morrem por dia por causa da fome.</p>
            <br />
            <a href="#">Isto é uma realidade!</a>
          </div>
        </div>
        
        <div className="search-location">
          <div className="card-search-location">
            <p>local</p>
            <progress value="60"></progress>
            <div>
              <p>escolha uma local da doação</p>
              <i></i>
            </div>
          </div>

          <div className="card-search-location">
            <p>Necessidades</p>
            <progress value="50"></progress>
            <div>
              <p>principais necessicidades</p>
              <i></i>
            </div>
          </div>

          <div className="card-search-location">
            <p>Data</p>
            <progress value="80"></progress>
            <div>
              <p>escolha uma data</p>
              <i></i>
            </div>
          </div>
          <i>P</i>
        </div>

      </section>

      <section className="section-main">
        <div className="warrap-main-description">
          <div>
            <h3>Faça uma doação</h3>
            <p>Escolha a categoria da doação e selecione o local para a coleta</p>
          </div>
          <div className="warrap-buttons">
            <div className="buttons">'{"<"}'-</div>
            <div className="buttons">-'{">"}'</div>
          </div>
        </div>
        <Warrap_cards/>
      </section>

    </main>
  );
};

export default main;
