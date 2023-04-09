import { apiUrl } from '../assets/data';
import { CardDataType, CharactersResponse } from '../types/types';

export const updateCardsData = (
  searchValue: string,
  setCardsData: (value: CardDataType[]) => void,
  setIsLoading: (value: boolean) => void,
  setError: (value: string) => void
) => {
  setIsLoading(true);
  const url = searchValue === '' ? apiUrl : `${apiUrl}?search=${searchValue}`;
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      if (response.status === 404) {
        throw new Error('The data is not found');
      }
      if (response.status === 401 || response.status === 403) {
        throw new Error('Something went wrong');
      }
    })
    .then((data: CharactersResponse) => {
      setCardsData(data?.results ?? []);
      setIsLoading(false);
    })
    .catch((err: Error) => {
      setError(err.message);
      setIsLoading(false);
    });
};
