import { createContext } from 'react';
import { Restaurant } from '../types/Restaurant';
import { UseQueryResult } from '@tanstack/react-query';

type RestaurantsContextType = {
  data: Restaurant[] | undefined; // Определите более конкретный тип для data, если он известен
  status: UseQueryResult['status'];
  error: UseQueryResult['error']; // Определите структуру ошибки, если есть
};

export const RestaurantsContext = createContext<RestaurantsContextType>({
  data: undefined,
  status: 'pending',
  error: null,
});
