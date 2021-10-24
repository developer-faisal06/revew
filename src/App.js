import logo from './logo.svg';
import './App.css';

import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './component/NotFound';
import About from './component/About';
import Contact from './component/Contact';
import Courses from './component/Courses';


function App() {
  return (
    <div className="App">
      
      <Router> 
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>  
          </Route>
          <Route exact path='/Home'>
            <Home></Home>  
          </Route>
         
          <Route path='/about'>
           <About></About> 
          </Route>
          <Route path='/Courses'>
            <Courses></Courses>
          </Route>
          <Route path='/Contact'>
           <Contact></Contact> 
          </Route>

<Route exact path='*'>
<NotFound></NotFound>
</Route>


        </Switch>
      </Router>
<Footer ></Footer>

    
    </div>
  );
}

export default App;
