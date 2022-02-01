import { Box, Flex, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import { Header } from "../../components/Header";

interface Continent {
  id: number;
  name: string;
  title: string;
  content: string;
  image: string;
  slug: string
  languages: number;
  countries: number;
  cities: City[];
}

interface City {
  id: number;
  name: string;
  country: string;
  image: string;
}

interface ContinentProps {
  continent: Continent;
}

export default function Continent({ continent}: ContinentProps) {
  return (
    <>
      <Header />

      <Box
        backgroundImage="url('/images/europe.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        height="500px"
        width="100%"
      />

      <Box width="1160px" mx="auto">
        <Grid templateColumns='repeat(2, 1fr)' mt="5rem">
          <GridItem colSpan={1}>
            <Text textAlign="justify">
              A Europa é, por convenção, um dos seis continentes do mundo. 
              Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se 
              da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, 
              o Cáucaso, e o mar Negro a sudeste
            </Text>
          </GridItem>
          <GridItem >
            <Grid px="4rem" py="2rem" templateColumns='repeat(3, 1fr)' gap="2.5rem" colSpan={1}>
              <GridItem colSpan={1}>
                <VStack>
                  <Text>50</Text>
                  <Text>países</Text>
                </VStack>
              </GridItem>
              
              <GridItem colSpan={1}>
                <VStack>
                  <Text>60</Text>
                  <Text>línguas</Text>
                </VStack>
              </GridItem>
              
              <GridItem colSpan={1}>
                <VStack>
                  <Text>27</Text>
                  <Text>cidades +100</Text>
                </VStack>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Box>

    </>
  )
}