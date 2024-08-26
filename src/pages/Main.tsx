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
          data,
          status,
          error,
          search,
          onStarClick,
        }}
      >
        <FetchRestaurantList />
      </RestaurantsContext.Provider>
    </>
  );
};
