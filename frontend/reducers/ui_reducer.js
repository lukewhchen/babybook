import { combineReducers } from 'redux';
import searchResultsReducer from './search_reducer';
import dropdownsReducer from './dropdowns_reducer';

const uiReducer = combineReducers({
  searchResults: searchResultsReducer,
  dropdown: dropdownsReducer
});

export default uiReducer;
