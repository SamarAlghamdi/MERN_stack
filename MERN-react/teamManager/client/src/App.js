import './App.css';
import {Router, Link} from '@reach/router';
import { Container } from 'react-bootstrap';
import AddPlayer from './components/AddPlayer';
import AllPlayers from './components/AllPlayers';


function App() {
  return (
    <Container style={{border: '1px solid black', padding:'10px'}} >
      <h1><Link to="/">Manage Players</Link> | <Link to="/">Manage Players statuses</Link></h1>
      <Router>
        <AllPlayers path="/"/>
        <AddPlayer path="/addplayer"/>
      </Router> 
    </Container>
  );
}

export default App;
