import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Nav, Navbar } from 'react-bootstrap';
import { Post } from './components/Post';
import { Posts } from './pages/Posts';
import { Navigation } from './components/Navigation';


function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Posts></Posts>
    </div>
  );
}

export default App;
