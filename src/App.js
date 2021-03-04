 import {Boy} from './components/boy'
 import {Gamebord} from './components/gameBoard'
 import {Menu} from './components/menu'
 import {Win} from './components/win'
 import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import {useState} from "react"
import {NavLink} from 'react-router-dom'


function App() {
  const [volume,setVolume] = useState(1)
  return (
    <Router>
      <Switch>
        <Route exact path = '/'>
        <Menu volume ={volume} setVolume ={setVolume}/>
        </Route>
        <Route path = '/game'>
        <div className="App" style={{ 
      backgroundImage: `url("/room.png")` 
    }}>
         
        <Boy/>
        <Gamebord volume ={volume} />
     
    </div>
        </Route>
        <Route path = '/win'>
       <Win/>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
