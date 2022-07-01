import React from 'react';
import styled from 'styled-components';

const StyledFlex = styled.div`
    display: flex;
    flex-direction: ${({flexDirection}) => flexDirection || 'row'};
    justify-content: ${({justifyContent}) => justifyContent || 'stretch'};
    align-items: ${({alignItems}) => alignItems || 'stretch'};
    margin: ${({margin}) => margin || '8' };
`;

const Flex = (props) => {
    return <StyledFlex {...props} />
}

export default Flex