import Random from './random';

describe('getRandomInt(max)', () => {
    it('Should generate a random number in the range [1, max]', async () => {
        const max = 10;
        const result = Random.getRandomInt(max);
        expect(result).toBeLessThanOrEqual(max);
        expect(result).toBeGreaterThanOrEqual(1);
    });
});

describe('getInt(start, max)', () => {
    it('Should generate a random number in the range [start, max]', async () => {
        const start = 1;
        const max = 10;
        const result = Random.getInt(start, max);
        expect(result).toBeLessThanOrEqual(max);
        expect(result).toBeGreaterThanOrEqual(start);
    });

    it('Should throw an error if start > endInclusive', async () => {
        expect(() => Random.getInt(2, 1)).toThrowError();
    });

    it('Should return start if start == endInclusive', async () => {
        expect(Random.getInt(1,1)).toEqual(1);
    })
});