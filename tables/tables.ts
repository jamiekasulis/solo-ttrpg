import * as fs from 'fs';

/*
 * REGISTER NEW TABLES HERE!
 */
export enum TableNameEnum {
    NAMES,
    CHARACTER_TRAITS,
}

/*
 * REGISTER NEW TABLE FILES HERE!
 */
export const TableNameToFilePath: Map<TableNameEnum, string> = new Map<TableNameEnum, string>([
    [TableNameEnum.NAMES, './names.csv'],
    [TableNameEnum.CHARACTER_TRAITS, './character-traits.csv']
]);