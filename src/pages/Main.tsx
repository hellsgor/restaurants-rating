import { useGetRestaurantsQuery } from '../hooks/useGetRestaurantsQuery';
import { Search } from '../ui/Search/Search';
import { RestaurantsContext } from '../contexts/RestaurantsContext';
import { FetchRestaurantList } from '../ui/RestaurantsList/FetchRestaurantList';
import { useState } from 'react';

export const MainPage = () => {
  const [search, setSearch] = useState('');
  const { data, status, error } = useGetRestaurantsQuery();

  return (
    <>
      <Search
        value={search}
        placeholder="Search for restaurants"
        onChange={(event) => {
          setSearch(event.target.value.trim());
        }}
      />
      <RestaurantsContext.Provider value={{ data, status, error, search }}>
        <FetchRestaurantList />
      </RestaurantsContext.Provider>
    </>
  );
};
