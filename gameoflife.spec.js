describe('Game of life', () => {
    it('Shoud have a cell with 8 neightbour', () => {
        expect(getCell().countNeightbour()).toBe(8);
    });
});
