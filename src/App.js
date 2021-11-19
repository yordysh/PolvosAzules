import Product from "./components/Product";
import Navbar from "./components/Navbar";
import './App.css';
import Products from "./components/Products";
import CheckoutPage from "./components/CheckoutPage";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import {useEffect} from "react";
import {useStateValue} from "./StateProvider";
import { auth } from "./firebase";
import { actionTypes } from "./reducer";
import Checkout from "./components/CheckoutForm/Checkout";


function App() {
  const [user, dispatch] = useStateValue();


  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log(authUser);
      if(authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        })
      }
    })
  },[])



  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/checkout">
          <Checkout/>
        </Route>
        <Route path="/checkout-page">
          <CheckoutPage/>
        </Route>
        <Route path="/Signin">
          <SignIn/>
        </Route>
        <Route path="/signup">
          <SignUp/>
        </Route>
          <Route path="/">
            <Products/>
          </Route>
        </Switch>
      </div>
      </Router>
  );
}

export default App;
