describe('FiZZ-UI - index.html', function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = '.';
        loadFixtures('index.html');
        $.holdReady(false);
        $('#input').val('45');
        $('#play').trigger('click');
    });

    it("displays fizzbuzz", function() {
        expect($('#display_message').text()).toBe('fizzbuzz');
    });

});
