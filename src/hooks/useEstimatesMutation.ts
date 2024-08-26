import { useMutation } from '@tanstack/react-query';
import { UpdateRestaurantRatingArgs } from '../types/Restaurant';
import { updateRestaurantRating } from '../api/api';
import { queryClient } from '../api/queryClient';

export const useEstimatesMutation = () => {
  return useMutation(
    {
      mutationFn: (data: UpdateRestaurantRatingArgs) =>
        updateRestaurantRating(data),
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['restaurants'] });
      },
    },
    queryClient,
  );
};
