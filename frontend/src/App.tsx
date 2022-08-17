import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import HomePage from './components/HomePage';
import AuthPage from './pages/AuthPage';
import { RootState } from './store';
import { loggedActions } from './store/loged-slice';

function App() {
  const loggedState = useSelector((state: RootState) => state.log.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let initialRefreshToken;

  useEffect(() => {
    initialRefreshToken = localStorage.getItem('refreshToken');

    if (initialRefreshToken) {
      dispatch(loggedActions.toggleState(true));
      navigate('/home');
    }
  }, [initialRefreshToken]);

  return (
    <main>
      <ButtonAppBar />
      <Routes>
        <Route path='/' element={<Navigate to='/auth/login' />} />
        <Route path='/auth/login' element={<AuthPage />} />
        <Route path='/auth/signup' element={<AuthPage />} />
        {loggedState && <Route path='/home' element={<HomePage />} />}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </main>
  );
}

export default App;
