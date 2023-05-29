/**
 * A Table represents a numbered list of oracle options.
 * Eventually we might add metadata to each element in the list
 * to enable things like sorting/filtering, as well as the
 * option to shuffle the list so that elements get new numbers.
 */
export class Table<T> {
    private elts: Array<T> = [];

    Table(elts: Array<T>) {
        this.elts = elts;
    }

    size (): number {
        return this.elts.length;
    }

    get (idx: number): T | undefined {
        return this.elts[idx]
    }

    getAll(): Array<T> {
        return this.elts;
    }
}