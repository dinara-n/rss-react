import { apiUrl } from '../assets/data';
const fetchData = async (url) => {
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
export const updateCardsData = async (searchValue, setCardsData, setIsLoading, setError) => {
    setIsLoading(true);
    const url = searchValue === '' ? apiUrl : `${apiUrl}?search=${searchValue}`;
    await fetchData(url)
        .then((data) => {
        setCardsData(data?.results ?? []);
        setIsLoading(false);
        setError('');
    })
        .catch((err) => {
        setError(err.message);
        setIsLoading(false);
    });
};
export const updateModalData = async (url, setModalData, setIsLoading, setError) => {
    setIsLoading(true);
    await fetchData(url)
        .then((data) => {
        setModalData(data);
        setIsLoading(false);
        setError('');
    })
        .catch((err) => {
        setError(err.message);
        setIsLoading(false);
    });
};
