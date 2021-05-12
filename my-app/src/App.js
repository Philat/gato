import {Switch, Route, Link} from 'react-router-dom';
import HomePage from "./components/home-page";
import Shop from "./components/pages/shop/shop";
import Notfound from "./components/notfound";
import SingleProduct from "./components/single-product/single-product";
import CartPage from "./components/pages/cart-page/cart-page";
import Checkout from "./components/checkout/checkout";
import Success from "./components/success/success";
import SignUpPage from "./components/sign-up-page";
import SignInPage from "./components/sign-in-page";
import GardenPage from "./components/garden/garden";
import CabinetPage from "./components/cabinet/cabinet";
import BedroomPage from "./components/bedroom/bedroom";
import Library from "./components/library/library";
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
            <Route path='/sign-up' component = {SignUpPage} />
            <Route path='/sign-in' component = {SignInPage} />
            <Route path='/library' component = {Library} />
            <Route path='/garden' component = {GardenPage} />
            <Route path='/bedroom' component = {BedroomPage}/>
            <Route path='/cabinet' component = {CabinetPage}/>
            <Route path='*' component = {Notfound} />
        </Switch>
    </div>
  );
}

export default App;
