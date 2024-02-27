import { Routes, Route } from 'react-router-dom';
import 'normalize.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import MessangerContainer from './components/Messanger/MessangerContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import HeadAreaContainer from './components/HeadArea/HeadAreaContainer';

// Структура проекта схемтаически нарисована в папке /public/images/projectStructure.jpg

function App(props) {
  const { store, dispatch } = props;

  return (
    <div className="App">
      <HeadAreaContainer />
      <div className="container">
        <HeaderContainer />
        <Navbar />
        <Routes>
          <Route path="/profile/:userId?" element={<ProfileContainer />} />
          {/* <Route path="/profile" element={<ProfileContainer />} /> */}
          <Route path="/Messanger" element={<MessangerContainer />} />
          <Route path="/Users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
