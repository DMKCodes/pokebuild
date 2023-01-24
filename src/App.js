import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TeamsPage from './pages/TeamsPage';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
        <Header />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='teams' element={<TeamsPage />} />
        </Routes>
    </div>
  );
}

export default App;
