'use client';
import React from 'react';
import {
    Accordion as ChakraAccordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react';

// Renomme ton composant pour éviter les conflits de nommage
const MyAccordion: React.FC = () => (
    <ChakraAccordion>
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                        Section 1 title
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                        Section 2 title
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
            </AccordionPanel>
        </AccordionItem>
    </ChakraAccordion>
);

export default MyAccordion;
