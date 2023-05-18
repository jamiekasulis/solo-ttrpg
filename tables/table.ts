import * as fs from 'fs';

export class Table<T> {
    rawdata: string;
    data: T[];

    public Table<T>(filePath: string) {
        const rawData = fs.readFileSync(filePath, 'utf-8');
        console.log('Read Table. Raw Data: ' + rawData);
    }
}