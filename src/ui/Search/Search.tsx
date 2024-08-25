import React, { FC } from 'react';
import './Search.css';

type SearchProps = {
  value: string | undefined;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Search: FC<SearchProps> = ({
  value,
  onChange,
  placeholder = null,
}) => {
  return (
    <section className="search">
      <div className="container">
        <div className="search__inner">
          <input
            type="text"
            placeholder={placeholder ? placeholder : 'Enter the search query'}
            onChange={onChange}
            value={value}
          />
        </div>
      </div>
    </section>
  );
};
