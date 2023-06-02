/**
 * Oracle includes a Table, Roll button, and a text box to show the result.
 * 
 * When the Roll button is clicked, a random element from data is selected
 * and displayed in the textarea.
 */
import React, { FC, useState } from 'react';
import { OracleTable } from '../oracleTable/OracleTable';
import { Random } from '../../random/random';
import './oracle.css';

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
        <div id="oracle_root_container">
            <OracleTable title={title} elements={data} />
            <div id='action_container'>
                <button id='roll_button' onClick={() => rollAndShowResult()}>Roll!</button>
                <label className='roll_result_label'>
                    {rollResult || 'Click Roll to get a result'}
                    </label>
            </div>
        </div>
    );
}

const getRandomResult = (data: Array<string>): string => {
    const randomIndex =  Random.getRandomInt(data.length);
    return `${randomIndex}. ${data[randomIndex - 1]}`;
}

export default Oracle;