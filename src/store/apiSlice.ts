import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from '../assets/data';

export const apiSlice = createApi({
  reducerPath: 'characters',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (build) => ({
    searchCharacters: build.query({
      query: (search = '') => (search === '' ? apiUrl : `?search=${search}`),
    }),
    getCharacter: build.query({
      query: (id: string) => `/${id}`,
    }),
  }),
});

export const { useSearchCharactersQuery, useLazySearchCharactersQuery, useLazyGetCharacterQuery } =
  apiSlice;
