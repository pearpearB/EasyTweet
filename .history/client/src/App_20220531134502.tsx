import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Ranking from './pages/Ranking/Ranking';
import Tweet from './pages/Tweet/Tweet';
import Error from './pages/Error/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/ranking' element={<Ranking />} />
        <Route path='/tweet' element={<Tweet />} />
        <Route path='/error' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
