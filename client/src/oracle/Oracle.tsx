/**
 * Oracle includes a Table, Roll button, and a text box to show the result.
 */
import React, { FC, useState } from 'react';
import { OracleTable } from './OracleTable';
import { Random } from '../random/random';

interface OracleProps {
    data: Array<string>, // list of data to render in table
    title: string,
}

export const Oracle: FC<OracleProps> = ({
    data,
    title,
}) => {
    const [rollResult, setRollResult] = useState<string>('');

    const rollAndShowResult = () => {
        const result = getRandomResult(data);
        setRollResult(result);
    }

    return (
        <div id='root_container'>
            <OracleTable title={title} elements={data} />
            <div id='action_container'>
                <button onClick={() => rollAndShowResult()}>Testing</button>
                <textarea value={rollResult} />
            </div>
        </div>
    );
}

const getRandomResult = (data: Array<string>): string => {
    const randomIndex =  Random.getRandomInt(data.length);
    return `${randomIndex}. ${data[randomIndex - 1]}`;
}

export default Oracle;