import { useNavigate } from 'react-router-dom';
import './Main.scss';

export default function Main() {
  const navigate = useNavigate();

  const navigateHandler = (menu: string) => {
    navigate(`/${menu}`);
  };

  return (
    <>
      <div className='MainWrap'>
        <div className='MainName'>Main</div>
        <div className='ButtonWrap'>
          <button onClick={() => navigateHandler('ranking')}>Ranking</button>
          <button onClick={() => navigateHandler('tweet')}>Tweet</button>
        </div>
      </div>
    </>
  );
}
