describe('Game of life', () => {
    it('Shoud have a cell with 8 neightbour', () => {
        expect(getCell().countAliveNeightbour()).toBe(8);
	});
	
	it('Should cell with 8 alive neightbours is dead', () => {
		expect(getCell().isAlive()).toBeFalsy();
	});
});

function getCell() {
	return new Cell();
}

class Cell {
	isAlive() {
		return false
	}

	countAliveNeightbour() {
		return 8;
	}
}