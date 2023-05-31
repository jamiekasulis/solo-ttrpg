import { splitIntoTable } from "./oracleTableUtils";

describe('splitIntoTable', () => {

    it('Should return an empty array when no data is given', () => {
        expect(splitIntoTable([], 2, 10)).toEqual([]);
    });

    it('Should return a correctly formed table with 1 row, 2 columns', () => {
        const data = [1, 2, 3, 4, 5, 6, 7];

        const colsPerRow = 2, eltsPerCol = 5;
        const result = splitIntoTable(data, colsPerRow, eltsPerCol);

        expect(result).toEqual(
            [
                // Row 0
                [
                    [1, 2, 3, 4, 5],
                    [6, 7]
                ]
            ]
        );
    });

    it('Should return a correctly formed table with 1 row, 1/2 columns', () => {
        const data = [1, 2, 3, 4];

        const colsPerRow = 2, eltsPerCol = 5;
        const result = splitIntoTable(data, colsPerRow, eltsPerCol);

        expect(result).toEqual(
            [
                // Row 0
                [
                    [1, 2, 3, 4]
                ]
            ]
        );
    });

    it('Should return a correctly formed table with multiple rows', () => {
        const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

        const colsPerRow = 2, eltsPerCol = 5;
        const result = splitIntoTable(data, colsPerRow, eltsPerCol);

        expect(result).toEqual(
            [
                // Row 0
                [
                    [1, 2, 3, 4, 5],
                    [6, 7, 8, 9, 10],
                ],
                [
                    [11]
                ]
            ]
        );
    });
});

export {};