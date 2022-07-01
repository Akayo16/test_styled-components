import React from 'react';
import styled from 'styled-components';

const StyledLine = styled.div`
    /* position: ${({position}) => position || 'relative'}; */
    color: ${({color}) => color || "white"};
    font-size: 24px;
`

const Line = (props) => {
    return <StyledLine {...props} />
}

export default Line