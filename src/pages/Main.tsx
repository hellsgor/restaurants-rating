import { useGetRestaurantsQuery } from '../hooks/useGetRestaurantsQuery';
import { Search } from '../ui/Search/Search';
import { RestaurantsContext } from '../contexts/RestaurantsContext';
import { FetchRestaurantList } from '../ui/RestaurantsList/FetchRestaurantList';
import React, { useState } from 'react';
import { getRestaurantEstimate } from '../utils/getRestaurantEstimate';
import { useEstimatesMutation } from '../hooks/useEstimatesMutation';

export const MainPage = () => {
  const [search, setSearch] = useState('');
  const { data, status, error } = useGetRestaurantsQuery();

  const createEstimatesMutation = useEstimatesMutation();

  const onStarClick = (event: React.MouseEvent) => {
    createEstimatesMutation.mutate(getRestaurantEstimate(event, data!));
  };

  return (
    <>
      <Search
        value={search}
        placeholder="Search for restaurants"
        onChange={(event) => {
          setSearch(event.target.value.trim());
        }}
      />
      <RestaurantsContext.Provider
        value={{
          data:
            Array.isArray(data) && data.length && search
              ? data.filter((item) =>
                  item.name.toLowerCase().includes(search.toLowerCase()),
                )
              : data,
          status,
          error,
          onStarClick,
        }}
      >
        <FetchRestaurantList />
      </RestaurantsContext.Provider>
    </>
  );
};
