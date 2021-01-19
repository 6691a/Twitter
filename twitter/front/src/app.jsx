import styles from './app.module.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './componets/login/login';
import Signup from './componets/signup/signup';
import { useEffect, useState } from 'react';

import Twitter from './componets/twitter/twitter';

import Contents from './contents/contents';


function App() {
  const [user, setUser] = useState({
    email: '123',
    name: '',
    image: '',
    birthday: '',
  });

  return (
    <>

        <Router>
          <Switch>
            <Route path={['/']} exact >
              <Twitter />
            </Route>
          
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/signup">
              <Signup />
            </Route>
            
            <Route path="/home">
              <Contents/>
            </Route>

          </Switch>
        </Router>
  
    </>
  );
}

export default App;
