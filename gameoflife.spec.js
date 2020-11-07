describe('Game of life', () => {
    it('Shoud have a cell with 8 neightbour', () => {
        expect(getCell().countNeightbour()).toBe(8);
    });
});

function getCell() {
	return new Cell();
}

class Cell {

	countNeightbour() {
		return 8;
	}
}