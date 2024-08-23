import { useGetRestaurantsQuery } from '../hooks/useGetRestaurantsQuery';
import { Search } from '../ui/Search/Search';
import { RestaurantsContext } from '../contexts/RestaurantsContext';
import { FetchRestaurantList } from '../ui/RestaurantsList/FetchRestaurantList';

export const MainPage = () => {
  const { data, status, error } = useGetRestaurantsQuery();

  return (
    <RestaurantsContext.Provider value={{ data, status, error }}>
      <Search />
      <FetchRestaurantList />
    </RestaurantsContext.Provider>
  );
};
