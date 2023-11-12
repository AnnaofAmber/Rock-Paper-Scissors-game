import scss from './App.module.scss'
import { Header } from './Header/Header';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <div className={scss.container}>
      <Layout> 
      <Header/>
      </Layout>
    </div>
  );
};
