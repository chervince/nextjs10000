'use client';

import React from 'react';
import { Button } from '@chakra-ui/react';

const ButtonCTA: React.FC = () => {
    const handleClick = () => {
        alert('CTA Clicked!');
    };

    return <Button onClick={handleClick} colorScheme="teal" size="lg">Get Started</Button>;
};

export default ButtonCTA;
