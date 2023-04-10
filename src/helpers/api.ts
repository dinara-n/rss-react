import { apiUrl } from '../assets/data';
import { CardDataType, CharactersResponse } from '../types/types';

const fetchData = async (url: string) => {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  if (response.status === 404) {
    throw new Error('The data is not found');
  }
  if (response.status === 401 || response.status === 403) {
    throw new Error('Something went wrong');
  }
};

export const updateCardsData = async (
  searchValue: string,
  setCardsData: (value: CardDataType[]) => void,
  setIsLoading: (value: boolean) => void,
  setError: (value: string) => void
) => {
  setIsLoading(true);
  const url = searchValue === '' ? apiUrl : `${apiUrl}?search=${searchValue}`;
  await fetchData(url)
    .then((data: CharactersResponse) => {
      setCardsData(data?.results ?? []);
      setIsLoading(false);
      setError('');
    })
    .catch((err: Error) => {
      setError(err.message);
      setIsLoading(false);
    });
};

export const updateModalData = async (
  url: string,
  setModalData: (value: CardDataType) => void,
  setIsLoading: (value: boolean) => void,
  setError: (value: string) => void
) => {
  setIsLoading(true);
  await fetchData(url)
    .then((data: CardDataType) => {
      setModalData(data);
      setIsLoading(false);
      setError('');
    })
    .catch((err: Error) => {
      setError(err.message);
      setIsLoading(false);
    });
};
