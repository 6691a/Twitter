import styles from './app.module.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './componets/login/login';
import Home from './componets/home/home';
import Signup from './componets/signup/signup';
import MySelect from './componets/mySelect';
import { useEffect, useState } from 'react';
import { getByText } from '@testing-library/react';




function App() {

  const [users,setUsers] = useState([]);



  // useEffect( () =>{
  //   var requestOptions = {
  //     method: 'GET',
  //     redirect: 'follow'
  //   };
    
  //   fetch("http://localhost:8000/user/", requestOptions)
  //     .then(response => response.text())
  //     .then(result => console.log(result))
  //     .catch(error => console.log('error', error));
  // })


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
