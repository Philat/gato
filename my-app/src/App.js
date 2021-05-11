import {Switch, Route} from 'react-router-dom';
import HomePage from "./components/home-page";
import Shop from "./components/pages/shop/shop";
import Notfound from "./components/notfound";
import SingleProduct from "./components/single-product/single-product";
import CartPage from "./components/pages/cart-page/cart-page";
import Checkout from "./components/checkout/checkout";
import Success from "./components/success/success";
import './App.scss';



function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path ='/' component={HomePage} />
            <Route path ='/kitchen' component={Shop}/>
            <Route path ='/product/:id' component={SingleProduct} />
            <Route path = '/cart' component = {CartPage} />
            <Route path = '/checkout' component = {Checkout} />
            <Route path='/thank-you' component = {Success} />
            <Route path='*' component = {Notfound} />
        </Switch>
    </div>
  );
}

export default App;
