import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import CartFeature from './features/Cart';
import ProductFeature from './features/Product';


function App() {

  return (
    <div className="App">
      <Header />
      {/* <p><Link to="/todo">Todo</Link></p>
      <p><Link to="/album">Album</Link></p> */}


      <Switch>
        <Redirect from="/home" to="" exact />
        <Redirect from="/post-list/:postId" to="/post/:postId" exact />

        <Route path="/" component={ProductFeature} exact />
        {/* <Route path="/todo" component={TodoFeature} />
        <Route path="/album" component={AlbumFeature} /> */}
        <Route path="/products" component={ProductFeature} />
        <Route path="/cart" component={CartFeature} />
        {/* <Route component={NotFound} /> */}
      </Switch>
      {/* <TodoFeature /> */}
      {/* <AlbumFeature /> */}
    </div>
  );
}

export default App;
