import React, { createContext } from 'react';
import { Restaurant } from '../types/Restaurant';
import { UseQueryResult } from '@tanstack/react-query';

type RestaurantsContextType = {
  data: Restaurant[] | undefined;
  status: UseQueryResult['status'];
  error: UseQueryResult['error'];
  onStarClick: (event: React.MouseEvent) => void;
};

export const RestaurantsContext = createContext<RestaurantsContextType>({
  data: undefined,
  status: 'pending',
  error: null,
  onStarClick: () => {},
});
