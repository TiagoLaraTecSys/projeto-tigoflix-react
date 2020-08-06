
import React from 'react'
import Menu from '../../../components/Menu'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';
function CadastroVideo(){
    return(
      <>
        <PageDefault>
            <h1>Cadastro de Video</h1>
            Aqui você cadastra seus videos.
            <Link to="/cadastro/categoria">
                Cadastrar novo video
            </Link>

        </PageDefault>
      </>
    );
  }

  export default CadastroVideo