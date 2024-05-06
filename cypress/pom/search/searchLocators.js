class SearchLocator {
    getSearchInput() {
        return cy.get('input.form-control.form-control-lg.search-string[name="q"][placeholder="Որոնել"]');
    }
}

export default new SearchLocator();
