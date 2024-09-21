'use client';

import React from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';

const ProjectSlider: React.FC = () => (
  <HStack spacing={4} overflowX="scroll">
    <Box borderWidth="1px" borderRadius="lg" p={4}>
      <Text>Project 1</Text>
    </Box>
    <Box borderWidth="1px" borderRadius="lg" p={4}>
      <Text>Project 2</Text>
    </Box>
    <Box borderWidth="1px" borderRadius="lg" p={4}>
      <Text>Project 3</Text>
    </Box>
  </HStack>
);

export default ProjectSlider;
