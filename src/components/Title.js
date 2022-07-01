import React from 'react';
import styled from 'styled-components';


const StyledTitle = styled.h1`
    color: ${({theme}) => theme.color.primary};
    font-size: 20px;
`

const Title = (props) => {

    return <StyledTitle {...props} />
}

export default Title