
import Main from './pages/Main';
import Profile from './pages/Profile';
import Schedule from './pages/Schedule';
import GenerateNews from './pages/GenerateNews';
// import 'bootstrap/dist/css/bootstrap.min.css'


import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (

    
    <>
    <Routes>
        <Route path="main" element={<Main/>}>
          <Route path="profile" element={<Profile/>}></Route>
          <Route path="schedule" element={<Schedule/>}></Route>
          <Route path="generate_news" element={<GenerateNews/>}></Route>
        </Route>
    </Routes>
    </>

  );
}


export default App;
