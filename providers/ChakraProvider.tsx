'use client';

import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

const ChakraProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <ChakraProvider>{children}</ChakraProvider>;
};

export default ChakraProviderWrapper;
