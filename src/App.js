import React from 'react';
import styled from 'styled-components';

import Title from './components/Title';
import Flex from './components/Flex';
import Console from './components/Console';
import Button from './components/Button';

const AppWrapper = styled.div`
height: 100vh;
width: 100vw;
background: #000;
padding: 2rem;
`;

const App = () => {

  return (

    <AppWrapper >
        
        <Flex alignItems={'center'} justifyContent={'center'} >

            <Title>
                App
            </Title>

        </Flex>

        <Flex 
            flexDirection = {'column'}
            margin={'10px 0px'}
        >

            <Console />

            <Button
                align={'flex-end'}
                color = {'green'}
                outlined
            >
                Send
            </Button>

        </Flex>

    </AppWrapper >
  )
}

export default App