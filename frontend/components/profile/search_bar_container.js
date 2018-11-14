import { connect } from 'react-redux';
import { fetchSearchResults, clearSearchResults } from '../../actions/search_actions';
import SearchBarComponent from './search_bar_component';

const mapStateToProps = state => {
  const dropdownDisplayed = (
    state.ui.dropdown.displayed &&
      state.ui.dropdown.component === 'search'
  );

  const searchResults = state.ui.searchResults.map(id => {
    return state.entities.users[id];
  });

  return {
    dropdownDisplayed,
    searchResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSearchResults: input => dispatch(fetchSearchResults(input)),
    clearSearchResults: () => dispatch(clearSearchResults())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarComponent);
