import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TeamsPage from './pages/TeamsPage';
import PokemonDetailPage from './pages/PokemonDetailPage';
import TeamDetailPage from './pages/TeamDetailPage';
import Header from './components/Header';
import { fetchPokemon } from './features/pokemon/pokemonSlice';
import { fetchMoves } from './features/moves/movesSlice';

function App() {
    const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(fetchPokemon());
        dispatch(fetchMoves());
    }, [dispatch]);

    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='teams' element={<TeamsPage />} />
                <Route
                    path='/pokemon/:pokemonId'
                    element={<PokemonDetailPage />}
                />
                <Route
                    path='/team/:teamId'
                    element={<TeamDetailPage />}
                />
            </Routes>
        </div>
    );
}

export default App;
