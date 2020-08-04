import React from 'react';
import Menu from './components/Menu'
import MainImage from './components/MainImage'

import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import dados_iniciais from './Data/dados_iniciais.json'

function App() {
  return (
    <div >
      <Menu/>

      <BannerMain
        videoTitle={dados_iniciais.categorias[0].videos[0].titulo}
        url={dados_iniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área" }
      />

      <Carousel

        igoneFirstVideo
        category={dados_iniciais.categorias[0]}
      
      />

    </div>
  );
}

export default App;
 