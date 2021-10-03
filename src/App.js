import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import About from './About/About';
import AllCourse from './AllCourse/AllCourse';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import NoPage from './NoPage/NoPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/all-course">
            <AllCourse></AllCourse>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route component={NoPage} />
        </Switch>
        <Footer></Footer>
      </Router>


    </div>
  );
}

export default App;
