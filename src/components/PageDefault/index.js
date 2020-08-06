import React from 'react'
import styled from 'styled-components';
const { default: Menu } = require("../Menu");
const { default: Footer } = require("../Footer");

const Main = styled.main`
background-color: var(--white);
color:var(--black);
flex:1;
padding-top:50px;
padding-right:5%;
padding-left: 5%;

`;

function PageDefault({ children }){
    return(
        <>
            <Menu/>
                <Main>    
                {children}
                </Main>
            <Footer/>
        </>

    );
}

export default PageDefault;