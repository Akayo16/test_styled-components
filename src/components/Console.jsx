import React, { useState } from 'react';
import styled from 'styled-components';

import Flex from './Flex';
import Line from './Line';

const ConsoleStyled = styled.textarea`
    margin: ${({margin}) => margin || '0'};
    width: 100%;
    height: 80vh;
    background: ${({background}) => background || 'transparent'};
    font-size: 24px;
    color: ${({color,theme}) => color || theme.color.primary};
    border: none;
    resize: none;
    outline: none;
`;

const Console = ({color, ...props}) => {

    const [lines, setLines] = useState(['C/user/test>']);

    const onKeyPress = e => {

        if(e.charCode === 13) {

            setLines([...lines, 'C/user/test>']);

        }

    }

    return (

        <Flex>

            <Flex flexDirection={'column'} >

                {lines.map((line, index) => {
                    return <Line color={color} key = {index} >
                        {line}
                    </Line>
                })}

            </Flex>

            <ConsoleStyled onKeyPress={onKeyPress} color={color} {...props} margin={'0px 10px'} />

        </Flex>

    )

}

export default Console