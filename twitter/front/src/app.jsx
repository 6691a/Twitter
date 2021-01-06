import styles from './app.module.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './componets/login/login';
import Home from './componets/home/home';
import Signup from './componets/signup/signup';
import MySelect from './componets/mySelect';
import { useEffect, useState } from 'react';
import { getByText } from '@testing-library/react';
import Loading from './loading/loading';




function App() {

  const [loading, setLoading] = useState(false)

  // useEffect(() => {

  //   setLoading(false);
  // }, [])


  return (
    //{render}
    <>

      {loading === true ?
        
        <Loading/> :
        <Router>
          <Switch>
            <Route path={['/']} exact >
              <Home/>
            </Route>
          
            <Route path="/login">
              <Login/>
            </Route>

            <Route path="/signup">
              <Signup setLoading ={setLoading}/>
            </Route>
            
          </Switch>
        </Router>
      }
    </>
  );
}

export default App;
