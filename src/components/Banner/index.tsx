import { Box, Flex, Heading, VStack, Image, Text, Grid, GridItem } from '@chakra-ui/react'

export function Banner() {
  return (
    <Box
        backgroundImage="url('/images/background.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        height="335px"
        width="100%"
      >
        <Box
          maxWidth="1240px"
          mx="auto"
        >
          <Grid templateColumns='repeat(5, 1fr)'>
            <GridItem colSpan={3}>
              <VStack
                padding="5rem"
                color="blue.100"
                align="flex-start"
              >
                <Box mb="4">
                  <Heading fontWeight="medium">5 Continentes</Heading>
                  <Heading fontWeight="medium">infinitas possibilidades.</Heading>
                </Box>
                
                <Text fontSize="lg" >
                  Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
                </Text>
              </VStack>
            </GridItem>

            <GridItem colSpan={2}>
              <Image mt="24" width="417px" src='/images/airplane.png' alt='airplane' />
            </GridItem>
          </Grid>
         
        </Box>

      </Box>
  )
}