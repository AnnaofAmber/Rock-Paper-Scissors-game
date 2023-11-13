import { useSelector } from 'react-redux';
import scss from './App.module.scss'
import { Header } from './Header/Header';
import { Layout } from './Layout/Layout';
import { RockPaperScissors } from './RockPaperScissors/RockPaperScissors';
import { selectAction } from 'redux/selectors';
import { GameStarted } from './GameStarted/GameStarted';

export const App = () => {
const action = useSelector(selectAction)

  return (
    <div className={scss.container}>
      <Layout> 
      <Header/>
      {action === 'unselected' && <RockPaperScissors/>}
      {action !== 'unselected' && <GameStarted/>}
      </Layout>
    </div>
  );
};
