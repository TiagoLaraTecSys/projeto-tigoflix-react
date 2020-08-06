import React from 'react';
import Logo from '../../assets/img/logo.png'
import './Menu.css'
import Button from '../Button';
import { Link } from 'react-router-dom';

function Menu(props){

    return(
     <nav className="Menu">
         <Link to="/">
            <img className="Logo" src={Logo} alt="Tigoflix"/>
         </Link>
         <Button as={Link} className="ButtonLink" to="/cadastro/video" >
             Adicionar video
         </Button>
     </nav>   
    );
}

export default Menu;