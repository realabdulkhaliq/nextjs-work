import { ReactNode } from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

export default function Pricing() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
        Simple pricing for your business
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
        Plans that are carefully crafted to suit your business.
        </Text>
      </VStack>
      <Box>
      <Stack
        direction={{ base: 'column', sm: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 0 }}
        py={10}>
        
        <HStack spacing={0} justifyContent="center">
          <Box py={4} px={12} backgroundColor="lightgray" borderLeftRadius={'xl'} >
            <Text fontWeight="500" fontSize="2xl">
            Premium PRO
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                329
              </Text>
            </HStack>
            <Text fontSize="2xl">
            billed just once
            </Text>
            <Button w="full" backgroundColor="purple.600" color="white" variant="outline">
                Start trial
              </Button>
          </Box>
          <Box>
        <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderRightRadius={'xl'}>
            <List spacing={2} textAlign="start" px={12}>
                <Text>
                Access these features when you get this pricing package for your business.
                </Text>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="blue.500" />
                International calling and messaging API
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="blue.500" />
                Additional phone numbers
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="blue.500" />
                Automated messages via Zapier
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="blue.500" />
                24/7 support and consulting
              </ListItem>
            </List>
          </VStack>
          </Box>
          </HStack>
          
      </Stack>
      </Box>
    </Box>
  );
}