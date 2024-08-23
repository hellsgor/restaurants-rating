import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getRestaurants } from '../api/api';
import { queryClient } from '../api/queryClient';
import { Restaurant } from '../types/Restaurant';

export function useGetRestaurantsQuery(): UseQueryResult<Restaurant[]> {
  return useQuery(
    {
      queryFn: () => getRestaurants(),
      queryKey: ['restaurants'],
    },
    queryClient,
  );
}
