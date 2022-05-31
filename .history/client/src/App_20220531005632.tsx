import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Ranking from './pages/Ranking/Ranking';
import Tweet from './pages/Tweet/Tweet';
import Error from './pages/Error/Error';
import Loading from './pages/Loading/loading';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/blindboard' element={<Ranking />} />
        <Route path='/blindboard' element={<Tweet />} />
        <Route path='/error' element={<Error />} />
        <Route path='/loading' element={<Loading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
