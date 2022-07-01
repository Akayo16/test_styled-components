import React from 'react';
import styled from 'styled-components';

const StyledLine = styled.div`
    color: ${({color, theme}) => color || theme.color.primary};
    font-size: 24px;
`

const Line = (props) => {
    return <StyledLine {...props} />
}

export default Line