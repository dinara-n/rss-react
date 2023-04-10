import { describe, it, vi } from 'vitest';
import { updateCardsData, updateModalData } from './api';
import { CardDataType } from 'types/types';
import { apiUrl } from '../assets/data';

const searchValueEmpty = '';
const searchValueLuke = 'luke';
const urlCharacterOne = `${apiUrl}/1`;
const urlCharacterDoesNotExist = `${apiUrl}/1000`;
let cardsData: CardDataType[] | [] = [];
let modalData: CardDataType | null = null;
let error = '';
const setCardsData = (data: CardDataType[]) => (cardsData = data);
const setModalData = (data: CardDataType) => (modalData = data);
const setIsLoading = vi.fn();
const setError = (value: string) => (error = value);

describe('updateCardsData', () => {
  it('returns correct data when search input is empty', async () => {
    await updateCardsData(searchValueEmpty, setCardsData, setIsLoading, setError);
    const characterOneName = cardsData[0].name;
    const characterTwoName = cardsData[1].name;
    expect(cardsData.length).toEqual(2);
    expect(characterOneName).toEqual('Luke Skywalker');
    expect(characterTwoName).toEqual('C-3PO');
    expect(error).toEqual('');
  });
  it('returns correct data when search input is not empty', async () => {
    await updateCardsData(searchValueLuke, setCardsData, setIsLoading, setError);
    console.log(cardsData);
    const characterOneName = cardsData[0].name;
    expect(cardsData.length).toEqual(1);
    expect(characterOneName).toEqual('Luke Skywalker');
    expect(error).toEqual('');
  });
});

describe('updateModalData', () => {
  it('returns correct data when the data exists', async () => {
    await updateModalData(urlCharacterOne, setModalData, setIsLoading, setError);
    expect(modalData?.name).toEqual('Luke Skywalker');
    expect(error).toEqual('');
  });
  it('sets correct error message when the data does not exist', async () => {
    await updateModalData(urlCharacterDoesNotExist, setModalData, setIsLoading, setError);
    expect(error).toEqual('The data is not found');
  });
});
