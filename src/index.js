import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Switch, Route} from 'react-router-dom'

function CadastroVideo(){
  return(
    <div>
      Cadastro de Video;
    </div>
  );
}

const Pagina404 = () => (
  <div>
    Página 404
  </div>
)
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact></Route>
      <Route path="/cadastro/video" component={CadastroVideo}></Route>
      <Route component={Pagina404}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

