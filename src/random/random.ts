
/**
 * Randomization functionality
 */
class Random {

    /**
     * @param start
     * @param endInclusive 
     * @returns A random integer in the range [start, endInclusive]
     */
    static getInt = (start: number, endInclusive: number): number => {
        if (start == endInclusive) {
            console.debug('Random.getInt was provided the same start and end value');
            return start;
        }
        if (start > endInclusive) {
            throw new Error('Random.getInt was provided with a start value greater than the end value');
        }
        return this.getRandomInt(endInclusive) + start
    }

    /**
     * Returns a random int between [0, max)
     * @param max Exclusive
     */
    static getRandomInt = (max: number): number => {
        return Math.floor(Math.random() * max);
    }
}

export default Random;