describe('Game of life', () => {
    it('Shoud have a cell with 8 neightbour', () => {
		let cell = getCell();
		cell.addNeightbour(new Cell());
		cell.addNeightbour(new Cell());
		cell.addNeightbour(new Cell());
		cell.addNeightbour(new Cell());
		cell.addNeightbour(new Cell());
		cell.addNeightbour(new Cell());
		cell.addNeightbour(new Cell());
		cell.addNeightbour(new Cell());

        expect(cell.countAliveNeightbour()).toBe(8);
	});
	
	it('Should cell with 8 alive neightbours is dead', () => {
		let cell = getCell();
		cell.addNeightbour(new Cell());
		cell.addNeightbour(new Cell());
		cell.addNeightbour(new Cell());
		cell.addNeightbour(new Cell());
		cell.addNeightbour(new Cell());
		cell.addNeightbour(new Cell());
		cell.addNeightbour(new Cell());
		cell.addNeightbour(new Cell());

		expect(cell.isAlive()).toBeFalsy();
	});

	it('Should cell with 3 alive neightbours is alive', () => {
		let cell = getCell();
		cell.addNeightbour(new Cell());
		cell.addNeightbour(new Cell());
		cell.addNeightbour(new Cell());
			
		expect(cell.countAliveNeightbour()).toBe(3);
		expect(cell.isAlive()).toBeTruthy();
	});
});

function getCell() {
	return new Cell();
}

class Cell {

	neightbour = [];

	addNeightbour(neightbour) {
		this.neightbour.push(neightbour)
	}

	isAlive() {
		return this.countAliveNeightbour() == 3 ? true : false
	}

	countAliveNeightbour() {
		return this.neightbour.length;
	}
}