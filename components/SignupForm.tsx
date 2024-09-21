'use client';

import React from 'react';
import { Box, Button, Input } from '@chakra-ui/react';

const SignupForm: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log(Object.fromEntries(formData.entries()));
        alert('Form Submitted!');
    };

    return (
        <Box as="form" onSubmit={handleSubmit}>
            <Input name="email" type="email" placeholder="Email Address" required mb={4} />
            <Input name="password" type="password" placeholder="Password" required mb={4} />
            <Button type="submit" colorScheme="teal">Submit</Button>
        </Box>
    );
};

export default SignupForm;
