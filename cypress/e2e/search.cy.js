import SearchPage from "../pom/search/searchPage";
import SearchAssertions from '../pom/search/searchAssertions';

const searchData = require('../fixtures/searchData.json');

describe('Search Functionality', () => {
    it('Valid search', () => {
        SearchPage.searchFor(searchData.validQuery);
        SearchPage.isSearchResultsVisible();
        SearchPage.isSearchResultVisible(searchData.validQuery);
    });

    it('Invalid search', () => {
        SearchPage.searchFor(searchData.invalidQuery);
        SearchAssertions.isNoResultsMessageVisible();
    });

	it('Empty search', () => {
        SearchPage.searchFor('');
        SearchPage.isSearchResultsNotVisible();
    }); 	
});
