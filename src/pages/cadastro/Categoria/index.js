import React from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault';
function CadastroCategoria(){
    return(
        <>
        <PageDefault>
        <h1>Cadastro de Categoria</h1>
            Aqui você cadastra uma nova categoria.
            <Link to="/"> Ir para a home</Link>
        </PageDefault>
        </>
    );

}

export default CadastroCategoria