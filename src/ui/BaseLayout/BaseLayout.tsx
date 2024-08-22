import './BaseLayout.css';

import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { MainPage } from '../../pages/Main';

export const BaseLayout = () => {
  return (
    <>
      <Header />
      <main>
        <MainPage />
      </main>
      <Footer />
    </>
  );
};
