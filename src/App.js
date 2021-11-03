import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Appointment from './components/Appointment/Appointment/Appointment';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/appointment">
            <Appointment></Appointment>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
