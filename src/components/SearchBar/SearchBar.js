import React, { useEffect, useRef } from 'react';
import styles from './SearchBar.module.css';
import searchIcon from '../../assets/search.png';
import { useAppDispatch } from '../../hooks/hooks';
import { updateSearchQuery } from '../../store/searchSlice';
function SearchBar(props) {
    const { searchValue, setSearchValue, trigger } = props;
    const dispatch = useAppDispatch();
    const searchRef = useRef(searchValue ?? '');
    useEffect(() => {
        searchRef.current = searchValue;
    }, [searchValue]);
    const handleChange = (evt) => {
        setSearchValue(evt.target.value);
    };
    const handleSearchClick = (evt) => {
        evt.preventDefault();
        dispatch(updateSearchQuery(searchRef.current));
        trigger(searchValue);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("form", { className: styles.search },
            React.createElement("input", { className: styles.searchInput, type: "search", value: searchValue ?? '', onChange: handleChange, placeholder: "Search..." }),
            React.createElement("button", { className: styles.searchButton, type: "submit", onClick: handleSearchClick, "aria-label": "Search." },
                React.createElement("img", { className: styles.searchButtonIcon, src: searchIcon })))));
}
export default SearchBar;
