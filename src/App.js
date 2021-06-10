import './globalcss.js';
import Navbar from './component/navbar/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import GlobalStyle from './globalcss'
import Home from './pages/Home.js';


function App() {
  return (
    <Router>
       <GlobalStyle />
       <Navbar />
       <Switch>
          <Route path='/' exact component={Home} />
         
       </Switch> 
    </Router>
  );
}

export default App;
/*
 <Switch>
          <Route path='/' exact component={Home} />
         
       </Switch> 
 <Route path='/About' exact component={About} />
          <Route path='/Contact' exact component={Contact} />
          <Route path='/product' exact component={Product} />
          <Route path='/sign' exact component={Sign} />
*/