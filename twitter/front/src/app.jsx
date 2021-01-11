import styles from './app.module.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './componets/login/login';
import Signup from './componets/signup/signup';
import { useEffect, useState } from 'react';
import { getByText } from '@testing-library/react';
import Loading from './loading/loading';
import Twitter from './componets/twitter/twitter';
import Home from './home/home';





function App() {



  const [user, setUser] = useState({
    email: '123',
    name: '',
    image: '',
    birthday: '',
  });
  // useEffect(() => {

  //   setLoading(false);
  // }, [])


  return (
    //{render}
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
              <Home  user={user}/>
            </Route>

          </Switch>
        </Router>
  
    </>
  );
}

export default App;
