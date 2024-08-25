import { createContext } from 'react';
import { Restaurant } from '../types/Restaurant';
import { UseQueryResult } from '@tanstack/react-query';

type RestaurantsContextType = {
  data: Restaurant[] | undefined;
  status: UseQueryResult['status'];
  error: UseQueryResult['error'];
  search?: Restaurant['name'];
};

export const RestaurantsContext = createContext<RestaurantsContextType>({
  data: undefined,
  status: 'pending',
  error: null,
  search: '',
});
