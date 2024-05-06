class SearchAssertions {
    isNoResultsMessageVisible() {
        return cy.contains('Ոչինչ չի գտնվել, փորձիր նորից').should('be.visible');
    }
}

export default new SearchAssertions();
