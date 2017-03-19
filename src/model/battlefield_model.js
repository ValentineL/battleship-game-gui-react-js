import BytesAwareModel from './abstract_bytes_aware_model'

export default class BattlefieldModel extends BytesAwareModel {
    constructor() {
        super();

        this.player = undefined;
        this.id = undefined;
        this.size = 0;

        this.cells = {};
        this.decorationCells = {};
    }

    setPlayer(player) {
        this.player = player;
    }

    getPlayer() {
        return this.player;
    }

    addDecorationCell(cell) {
        this.decorationCells[cell.coordinate] = cell;
    }

    addCell(cell) {
        this.cells[cell.coordinate] = cell;
    }

    hasCell(cell) {
        return undefined !== this.cells[cell.coordinate];
    }

    removeCell(cell) {
        delete this.cells[cell.coordinate];
    }

    getCell(coordinate) {
        return this.cells[coordinate] || undefined;
    }

    getCells() {
        return this.cells;
    }
}