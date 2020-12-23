import styles from './app.module.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './componets/login/login';
import Home from './componets/home/home';
import Signup from './componets/signup/signup';
import MySelect from './componets/mySelect';





function App() {
  return (
    //<MySelect/>
    <Router>
      <Switch>
        <Route path={['/']} exact >
          <Home/>
        </Route>
      
        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/signup">
          <Signup/>
        </Route>
        
      </Switch>
    </Router>
    
  );
}

export default App;
