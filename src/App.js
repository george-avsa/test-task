import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Nav, Navbar } from 'react-bootstrap';
import { Post } from './components/Post';
import { Posts } from './pages/Posts';
import { Navigation } from './components/Navigation';
import { UserDetials } from './pages/UserDetails';
import { User } from './components/User';


function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <UserDetials></UserDetials>
    </div>
  );
}

export default App;
