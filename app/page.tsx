import '../styles/styles.css';
import React from 'react';
import ButtonCTA from '@/components/ButtonCTA';
import SignupForm from '@/components/SignupForm';
import ProjectSlider from '@/components/ProjectSlider';
import { Box, Container, Flex, Heading, VStack } from '@chakra-ui/react';
import Accordion from '@/components/Accordion';


export default function HomePage() {
  return (
    <Container maxW="100vw" p={0} m={0}>
      <Box className="section bg-gray-100">
        <Heading>Welcome to Nextjs10000</Heading>
      </Box>

      <Box className="section bg-gray-200">
        <Heading as="h2" size="lg" mb={4}>
          Don't miss out!
        </Heading>
        <ButtonCTA />
        <Accordion />
      </Box>

      <Box className="section bg-gray-300">
        <Heading as="h2" size="lg" mb={4}>
          Sign Up for Updates
        </Heading>
        <SignupForm />
      </Box>

      <Box className="section bg-gray-400">
        <Heading as="h2" size="lg" mb={4}>
          Our Projects
        </Heading>
        <ProjectSlider />
      </Box>
    </Container>
  );
}