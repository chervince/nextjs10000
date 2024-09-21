'use client';

import React from 'react';
import ButtonCTA from '@/components/ButtonCTA';
import SignupForm from '@/components/SignupForm';
import ProjectSlider from '@/components/ProjectSlider';
import { Box, Container, Heading, VStack } from '@chakra-ui/react';

const Home: React.FC = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <Box as="header" textAlign="center" mb={8}>
        <Heading>Welcome to Nextjs10000</Heading>
      </Box>

      <VStack spacing={8}>
        <Box as="section" textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Dont miss out!
          </Heading>
          <ButtonCTA />
        </Box>

        <Box as="section">
          <Heading as="h2" size="lg" mb={4}>
            Sign Up for Updates
          </Heading>
          <SignupForm />
        </Box>

        <Box as="section">
          <Heading as="h2" size="lg" mb={4}>
            Our Projects
          </Heading>
          <ProjectSlider />
        </Box>
      </VStack>
    </Container>
  );
};

export default Home;
