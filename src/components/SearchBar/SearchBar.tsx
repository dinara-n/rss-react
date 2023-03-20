import React from 'react';
import styles from './SearchBar.module.css';

type SearchBarProps = Record<string, never>;

type SearchBarState = {
  value: string;
};

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps | Readonly<SearchBarProps>) {
    super(props);
    this.state = { value: localStorage.getItem('searchValue') ?? '' };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(): void {
    this.setState({ value: localStorage.getItem('searchValue') ?? '' });
  }

  componentWillUnmount(): void {
    localStorage.setItem('searchValue', this.state.value);
  }

  handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    this.setState(() => {
      return { value: evt.target.value };
    });
  }
  render() {
    return (
      <>
        <form>
          <input
            className={styles.search}
            type="search"
            value={this?.state?.value ?? ''}
            onChange={this.handleChange}
            placeholder="Search..."
          />
        </form>
      </>
    );
  }
}

export default SearchBar;
