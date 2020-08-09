import React from 'react';
import Menu from '../../components/Menu'
import MainImage from '../../components/MainImage'

import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import dados_iniciais from '../../Data/dados_iniciais.json'

function Home() {
  return (
    <div >
      <Menu/>

      <BannerMain
        videoTitle={dados_iniciais.categorias[0].videos[0].titulo}
        url={'https://www.youtube.com/watch?v=Mjq_PpiYR3o&t=98s'}
        videoDescription={"Como iniciar no mundo de investimentos no Mercado de Capitais?" }
      />

      <Carousel

        igoneFirstVideo
        category={dados_iniciais.categorias[0]}
      
      />

    </div>
  );
}

export default Home;
 