import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Product from './components/Product/Product';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/products/:id?" render={(props) => <Product text="Adios" {...props}></Product>}></Route>
          <Route exact path="/compras" render={() => <h1>Estás pagando</h1>}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
