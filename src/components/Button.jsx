import React from 'react';
import styled, { css, keyframes } from 'styled-components';


const StyledButton = styled.button`
    border: none;
    outline: none;
    padding: 10px 15px;
    font-size: 18px;
    cursor: pointer;
    align-self: ${({align}) => align || 'stretch'};

    ${props => props.primary && css`
        color: ${({color}) => color || 'white'};
        background: ${({background}) => background || 'white'};
    `}

    ${props => props.outlined && css`
        border: 1px solid ${({color}) => color || 'white'};
        color: ${({color}) => color || 'white'};
        background: transparent;
    `}
`;

const Button = (props) => {
    return <StyledButton {...props} />
}

export default Button