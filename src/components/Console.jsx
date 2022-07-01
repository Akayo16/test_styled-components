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
    color: ${({color}) => color || '#fff'};
    border: none;
    resize: none;

    &:focus {
        outline: none;
    }
`;

const Console = ({color, ...props}) => {

    const [lines, setLines] = useState(['C/user/test>']);

    const onKeyPress = e => {

        if(e.charKey == 13) {

            setLines(...lines, 'C/user/test_Styled-components>')

        }

    }

    return (

        <Flex>

            <Flex flexDirection = {'column'}>

                {lines.map(line => {
                    return <Line color={color} key = {line} >
                        {line}
                    </Line>
                })}

            </Flex>

            <ConsoleStyled color={color} {...props} margin={'0px 10px'} />

        </Flex>

    )

}

export default Console