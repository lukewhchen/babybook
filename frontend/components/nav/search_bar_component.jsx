import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'

class SearchBarComponent extends React.Component {
  constructor(props) {
    super(props);
      this.handleSearch = this.handleSearch.bind(this);
      this.handleKeyDown = this.handleKeyDown.bind(this);
      this.clearInput = this.clearInput.bind(this);
      this.state = {
        input: '',
        searchResults: this.props.searchResults,
        cursorIdx: 0
      };
  }

  handleSearch(e) {
    e.preventDefault();
    this.setState({ input: e.target.value }, () => {
      if (this.state.input.length > 0) {
        this.props.fetchSearchResults(this.state.input);
      } else {
        this.props.clearSearchResults();
      }
    });
  }


  handleKeyDown(e) {
    const { cursorIdx, searchResults } = this.state;
    const lastIdx = searchResults.length-1;
    if (e.keyCode === 38) {
        this.setState( prevState => ({
          cursorIdx: cursorIdx > 0 ? prevState.cursorIdx - 1 : lastIdx
        }));
    } else if (e.keyCode === 40) {
      this.setState( prevState => ({
        cursorIdx: cursorIdx < lastIdx ? prevState.cursorIdx + 1 : 0
      }));
    } else if (e.keyCode === 13) {
      this.props.clearSearchResults();
      this.props.history.push(`/users/${searchResults[cursorIdx].id}`);
      this.setState( {cursorIdx:0});
    }
  }

  componentWillUpdate(nextProps) {
    if (this.state.searchResults.length !== nextProps.searchResults.length) {
      this.setState({ searchResults: nextProps.searchResults });
    }

    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.props.clearSearchResults();
    }
  }

  clearInput() {
    this.props.clearSearchResults();
    this.setState({ input: '' });
  }

  render() {
    let displayedSearchResults = null;
    let cursorIdx = this.state.cursorIdx;
    if (this.state.searchResults.length >= 1) {
        const searchResultItems = this.state.searchResults.map((user, idx) => {
          return(
            <li className={cursorIdx === idx ? 'selected' : null} key={user.id}>
              <Link to={`/users/${user.id}`} className='search-result-content' onClick={this.clearInput}>
                <i className="fa fa-user-circle" aria-hidden="true"/><p>{user.first_name} {user.last_name}</p>
              </Link>
            </li>
          );
      });

      displayedSearchResults = (
        <ul className='search-results content-item'>
          {searchResultItems}
        </ul>
      );
    }

    return (
      <div className='search-container'>
        <div className='search-bar'>
          <input
            onChange={this.handleSearch}
            onKeyDown={this.handleKeyDown}
            onClick={this.clearInput}
            type='text'
            placeholder='Search'
            value={this.state.input}
          />
        </div>
        <div className="search-button">
          <div className="search-icon"></div>
        </div>
        {displayedSearchResults}
      </div>
    );
  }
}

export default withRouter(SearchBarComponent);
