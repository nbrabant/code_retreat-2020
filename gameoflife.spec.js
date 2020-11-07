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

	it('Should alive cell with 2 alive neightbours keep alive', () => {
		let cell = getCell();
		cell.addNeightbour(new Cell());
		cell.addNeightbour(new Cell());
			
		expect(cell.countAliveNeightbour()).toBe(2);
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
		if (this.countAliveNeightbour() == 3) return true
		if (this.countAliveNeightbour() == 2) return true
		return false
	}

	countAliveNeightbour() {
		return this.neightbour.length;
	}
}