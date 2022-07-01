import React from 'react';
import styled, { css } from 'styled-components';


const StyledButton = styled.button`
    border: none;
    outline: none;
    padding: 10px 15px;
    font-size: 18px;
    cursor: pointer;
    align-self: ${({align}) => align || 'stretch'};

    ${props => props.primary && css`
        color: ${({color, theme}) => color || theme.color.primary};
        background: ${({background, theme}) => background || theme.color.primary};
    `}

    ${props => props.outlined && css`
        border: 1px solid ${({color,theme}) => color || theme.color.primary};
        color: ${({color, theme}) => color || theme.color.primary};
        background: transparent;
    `}
`;

const Button = (props) => {
    return <StyledButton {...props} />
}

export default Button