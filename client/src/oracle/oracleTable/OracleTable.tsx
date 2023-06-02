import React, { FC } from 'react';
import { splitIntoTable } from '../oracle/utils/oracleTableUtils';
import './oracleTable.css';

interface OracleTableProps {
    title: string;
    elements: Array<string>;
}

export const OracleTable: FC<OracleTableProps> = ({
    title,
    elements,
}) => {
    const colsPerRow = 2, eltsPerCol = 5;
    const dataTable = splitIntoTable(elements, colsPerRow, eltsPerCol);
    const getElementNumberByTablePosition = (
        row: number, col: number, idx: number
        ): number => {
            const eltsPerRow = eltsPerCol * colsPerRow;
            return eltsPerRow*row + (eltsPerCol*col) + idx + 1;
    }

    return (
        <div className='oracle_table_root_container'>
            <h1>{title}</h1>
            <div id='row_container'>
                {dataTable.map((row, r) => 
                    <div className='table_row'>
                        {dataTable[r].map((col, c) =>
                            <div className='table_col'>
                                <ul>
                                    {
                                        dataTable[r][c].map((elt, idx) => 
                                            <p>
                                                <strong className='list_element_number'>{getElementNumberByTablePosition(r, c, idx)}</strong>. <em>{dataTable[r][c][idx]}</em>
                                            </p>
                                        )
                                    }
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default OracleTable;