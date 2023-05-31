/**
 * Splits the given array into a multidimensional array representing
 * rows and columns, where result[0][0] is the first column
 * of the first row.
 * 
 * @param data - The data to split
 * @param colsPerRow 
 * @param eltsPerCol 
 */
export const splitIntoTable = (
    data: Array<any>,
    colsPerRow: number,
    eltsPerCol: number,
): Array<Array<Array<any>>> => {
    if (data.length == 0) return [];

    const result: Array<Array<Array<any>>> = [];
    
    var numSplitSoFar = 0;
    while (numSplitSoFar <= data.length) {
        // Grab next column's worth of data
        var nextCol = data.slice(numSplitSoFar, numSplitSoFar + eltsPerCol);
        console.log('nextCol', nextCol);
        numSplitSoFar += eltsPerCol;

        // Put it in the correct row
        if (result.length > 0 && result[result.length - 1].length < colsPerRow) {
            // Add to an existing row
            result[result.length - 1].push(nextCol);
            console.log('Added col to existing row');
        } else {
            // Start new row
            result.push([nextCol]);
            console.log('Created new row');
        }
    }
    return result;
}