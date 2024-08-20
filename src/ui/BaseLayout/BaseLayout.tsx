import './BaseLayout.css';

import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

export const BaseLayout = () => {
  return (
    <>
      <Header />
      <main>
        <input placeholder="Search for restaurants" />
        <section></section>
      </main>
      <Footer />
    </>
  );
};
