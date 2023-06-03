import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from './components/Navigation';
import { UserDetials } from './pages/UserDetails';
import { Route, Routes } from 'react-router-dom';
import { Posts } from './pages/Posts';
import { AboutMe } from './pages/AboutMe';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes >
          <Route path="/" element={<Posts />}></Route>
          <Route path='/aboutme' element={<AboutMe />}></Route>
          <Route path='/user/:id' element={<UserDetials />}></Route>
          <Route path='/user/:id/:postId' element={<UserDetials />}></Route>
          <Route path='/404' element={<NotFound />}></Route>
          <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
