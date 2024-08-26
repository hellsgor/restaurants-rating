import { useContext } from 'react';
import { RestaurantsContext } from '../../contexts/RestaurantsContext';
import { Loader } from '../Loader/Loader';
import { RestaurantsList } from './RestaurantsList';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { reloadPageButtonHandler } from '../../utils/reloadPageButtonHandler';
import { Reload } from '../icons/Reload/Reload';

export const FetchRestaurantList = () => {
  const { data, status, error } = useContext(RestaurantsContext);

  switch (status) {
    case 'pending':
      return <Loader />;

    case 'success':
      if (Array.isArray(data) && data.length) {
        return <RestaurantsList />;
      } else {
        return <ErrorMessage title="Nothing was found at your request" />;
      }

    case 'error':
      return (
        <ErrorMessage
          message={error!.message}
          buttonText="Reload page"
          buttonHandler={reloadPageButtonHandler}
          buttonIcon={<Reload />}
        />
      );

    default:
      break;
  }
};
