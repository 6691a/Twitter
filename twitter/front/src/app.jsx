import styles from './app.module.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './componets/login/login';
import Home from './componets/home/home';



function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/','/home']} exact >
          <Home/>
        </Route>
      
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
