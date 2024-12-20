import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './pages/Home';
import Room from './pages/Room';
import Login from './pages/Login';
import ChatBot from '../src/Components/Chatbot/Chatbot'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room" element={<Room />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <ChatBot />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
