 import {Boy} from './components/boy'
 import {Gamebord} from './components/gameBoard'
 import {Menu} from './components/menu'
 import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {
  alert('please give me one day')
  return (
    <Router>
      <Switch>
        <Route exact path = '/'>
        <Menu/>
        </Route>
        <Route path = '/game'>
        <div className="App" style={{ 
      backgroundImage: `url("/room.png")` 
    }}>
        <Boy/>
        <Gamebord/>
    </div>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
