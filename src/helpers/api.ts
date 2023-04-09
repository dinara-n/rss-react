import { apiUrl } from '../assets/data';
import { CardDataType, CharactersResponse } from '../types/types';

export const updateCardsData = (
  searchValue: string,
  setCardsData: (value: CardDataType[]) => void,
  setIsLoading: (value: boolean) => void
) => {
  setIsLoading(true);
  const url = searchValue === '' ? apiUrl : `${apiUrl}?search=${searchValue}`;
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data: CharactersResponse) => {
      setCardsData(data.results);
      setIsLoading(false);
    })
    .catch((err: Error) => console.log(err.message));
};
