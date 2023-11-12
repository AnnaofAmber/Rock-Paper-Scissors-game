import scss from './App.module.scss'
import { Header } from './Header/Header';
import { Layout } from './Layout/Layout';
import { RockPaperScissors } from './RockPaperScissors/RockPaperScissors';

export const App = () => {
  return (
    <div className={scss.container}>
      <Layout> 
      <Header/>
      <RockPaperScissors/>
      </Layout>
    </div>
  );
};
