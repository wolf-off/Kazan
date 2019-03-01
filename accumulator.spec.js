describe('Accumulator', function () {

    var target = null;

    beforeEach(function () {
        target = new Accumulator();
    });

    it('add value', function () {                
        target.add(2);
        expect(target.value).toEqual(2);
    });
});