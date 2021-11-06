import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Appointment from './components/Appointment/Appointment/Appointment';
import Home from './components/Home/Home/Home';
import LogIn from './components/LogIn/LogIn/LogIn';
import PrivateRoute from './components/LogIn/PrivateRoute/PrivateRoute';
import Register from './components/LogIn/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
