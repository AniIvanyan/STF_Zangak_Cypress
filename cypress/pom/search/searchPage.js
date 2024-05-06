import SearchLocator from './searchLocators';

class SearchPage {
    visitHomePage() {
        cy.visit('https://zangakbookstore.am/');
    }

    searchFor(query) {
        this.visitHomePage();
        SearchLocator.getSearchInput().should('be.visible').type(`${query}{enter}`);
    }

    isSearchResultsVisible() {
        return cy.url().should('include', 'search');
    }

    isSearchResultsNotVisible() {
        return cy.url().should('not.include', 'search');
    }

    isSearchResultVisible(resultText) {
        return cy.contains(resultText).should('be.visible');
    }
}

export default new SearchPage();
