import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <p>&#169; {`${new Date().getFullYear()}`} Eats</p>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms Of Service</a>
        </div>
      </div>
    </footer>
  );
};
