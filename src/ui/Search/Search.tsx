import './Search.css';

export const Search = () => {
  return (
    <section className="search">
      <div className="container">
        <div className="search__inner">
          <input type="text" placeholder="Search for restaurants" />
        </div>
      </div>
    </section>
  );
};
