import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './LandingPage.css';

function App() {
  return (
    <>
    <div className="menu-container">
      <ul className="menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#bolos">Bolos</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
      <div className="search-box">
        <input type="text" placeholder="Procurar..." />
        <div className="search-icon"></div>
      </div>
    </div>
    <section className="intro-section">
      <p>Descubra o segredo para bolos irresistíveis!</p>
      <p>Transforme seus momentos em delícias memoráveis.</p>
      <button className="see-now-btn">Ver agora</button>
    </section>

      <section className="carousel-section">
       
  <div className="card">
    <img src="bla-2.jpg" alt="Bolo Delícia De Abacaxi" />
    <h3>Bolo Delícia De Abacaxi</h3>
    <p>Descrição curta do bolo de abacaxi.</p>
    <button className='ver'>Ver</button>
  </div>
     
   </section>

   <div className="recipe-section">
      <div className="recipe-content">
        <h2>Como Fazer Um Clássico Vanilla?</h2>
        <ul className="ingredients-list">
          <li>4 ovos</li>
          <li>1 copo de leite</li>
          <li>2 copos de açúcar</li>
          <li>2 colheres de sopa de óleo</li>
          <li>2 copos de farinha de trigo</li>
          <li>1 pitada de sal</li>
          <li>1 colher de sopa de fermento</li>
          <li>Creme</li>
        </ul>
      </div>
      <div className="recipe-images">
        <img src="bla-2.jpg" alt="Bolo de Vanilla Lateral" />

      </div>
    </div>

  </>
    
    
  );
}

export default App;
