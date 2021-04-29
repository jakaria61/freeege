
import './App.css';
import Home from './Pages/Home';
import Product from './Pages/Product'
import './Post.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import About from './Pages/About';
import Post from './Pages/Post';
import Contact from './Pages/Contact';
import Payment from './Pages/Payment';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/Product">
            <Product></Product>
          </Route>
          <Route path="/About">
          <About></About>
          </Route>
          <Route path="/Post">
            <Post></Post>
          </Route>
          <Route path="/Contact">
            <Contact></Contact>
          </Route>
          <Route path="/Payment">
            <Payment></Payment>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
