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

  const [status,setStatus] = useState('app');


  const render = () => {
    switch (status) {
      case 'loading':
        return <Loading/>

      case 'app':
        return(
        <Router>
          <Switch>
            <Route path={['/']} exact >
              <Home setStatus={setStatus} />
            </Route>
          
            <Route path="/login">
              <Login setStatus={setStatus}/>
            </Route>
    
            <Route path="/signup">
              <Signup setStatus={setStatus}/>
            </Route>
            
          </Switch>
        </Router>
      )
      default:
        
    }
  }

  return (

    {render}

    // <Router>
    //   <Switch>
    //     <Route path={['/']} exact >
    //       <Home/>
    //     </Route>
      
    //     <Route path="/login">
    //       <Login/>
    //     </Route>

    //     <Route path="/signup">
    //       <Signup/>
    //     </Route>
        
    //   </Switch>
    // </Router>
    
  );
}

export default App;
