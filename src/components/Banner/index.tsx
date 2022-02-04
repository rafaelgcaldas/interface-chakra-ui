import { Box, Flex, Heading, VStack, Image, Text, Grid, GridItem } from '@chakra-ui/react'

export function Banner() {
  return (
    <Box
        backgroundImage="url('/images/background.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        height={["163px", "335px","335px"]}
        width="100%"
      >
        <Box
          maxWidth="1240px"
          mx="auto"
        >
          <Grid templateColumns={['repeat(1fr)', 'repeat(1fr)', 'repeat(5, 1fr)']}>
            <GridItem colSpan={[1, 3, 3]}>
              <VStack
                padding={["1rem", "5rem"]}
                color="blue.100"
                align="flex-start"
              >
                  <Box mb={["2", "4"]}>
                  <Heading fontWeight={["small", "medium"]}>5 Continentes</Heading>
                  <Heading fontWeight={["small", "medium"]}>infinitas possibilidades.</Heading>
                </Box>
                
                <Text fontSize={["sm", "lg"]} >
                  Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
                </Text>
              </VStack>
            </GridItem>

            <GridItem colSpan={2} display={['none', 'none', 'block']}>
              <Image mt="24" width="417px" src='/images/airplane.png' alt='airplane' />
            </GridItem>
          </Grid>
         
        </Box>

      </Box>
  )
}