import React, { FC } from 'react';

interface OracleTableProps {
    title: string;
    elements: Array<string>;
}

export const OracleTable: FC<OracleTableProps> = ({
    title,
    elements,
}) => {
    return (
        <>
            <h1>{title}</h1>
            <ol>
                {elements.map((elt, i) => <li key={i}>{elt}</li>)}
            </ol>
        </>
    )
}

export default OracleTable;