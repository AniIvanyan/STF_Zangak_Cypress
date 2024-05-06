describe('Add to Basket Functionality', () => {
	it('Empty basket check', () => {
		cy.visit('https://zangakbookstore.am/');
		cy.get('a.btn.cart-btn.header-btn.btn-white-badge.d-flex.align-items-center.justify-content-center.p-0.ml-3').click();
		cy.contains('Քո զամբյուղում դեռ ապրանքներ չկան').should('be.visible');
	});
	it('Add a visible book to the basket', () => {
		cy.visit('https://zangakbookstore.am/');

		cy.get('.owl-carousel .owl-stage .owl-item.active').first()
			.scrollIntoView()
			.should('be.visible');

		cy.get('.owl-item.active .product-slider-item').first()
			.find('h1').invoke('text').then((text) => {
				const bookName = text.trim();
				cy.wrap(bookName).as('bookName');
			});

		cy.get('.owl-item.active .product-slider-item').first()
			.find('.btn.btn-lg.btn-cs.btn-green.btn-block.btn-hover-up').click();

		cy.wait(2000)
	
		cy.get('a.btn.cart-btn.header-btn.btn-white-badge.d-flex.align-items-center.justify-content-center.p-0.ml-3').click();

		cy.get('@bookName').then((name) => {
			cy.contains(name).should('be.visible');
		});
	});
});
