import * as fs from 'fs';

export class Table<T> {
    data: T[];

    public Table(filePath: string) {
        const d = fs.readFileSync(filePath, 'utf-8');
        console.log(d);
    }
}