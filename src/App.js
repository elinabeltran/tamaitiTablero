import home from './pages/home.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  return (

    <Router>
    <Switch>
      <Route path="/" component={home}></Route>
    </Switch>

  </Router>
  




  );
}

export default App;
