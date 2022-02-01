import { Box, Flex, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

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

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Header />

      <Box
        backgroundImage={`url(${continent.image})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        height="500px"
        width="100%"
      />

      <Box width="1160px" mx="auto">
        <Grid templateColumns='repeat(2, 1fr)' mt="5rem">
          <GridItem colSpan={1}>
            <Text textAlign="justify">
              {continent.content}
            </Text>
          </GridItem>
          <GridItem >
            <Grid px="4rem" py="2rem" templateColumns='repeat(3, 1fr)' gap="2.5rem" colSpan={1}>
              <GridItem colSpan={1}>
                <VStack>
                  <Text>{continent.countries}</Text>
                  <Text>países</Text>
                </VStack>
              </GridItem>
              
              <GridItem colSpan={1}>
                <VStack>
                  <Text>{continent.languages}</Text>
                  <Text>línguas</Text>
                </VStack>
              </GridItem>
              
              <GridItem colSpan={1}>
                <VStack>
                  <Text>{continent.cities.length}</Text>
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

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const response = await api.get(`continents`);
  const continents = response.data;

  const paths = continents.map(continent => {
    return {
      params: { slug: continent.slug}
    }
  })

  console.log("params: ", paths);

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const { slug } = ctx.params;

    const { data } = await api.get(`continents?slug=${slug}`);

    if (!data) {
      return { notFound: true };
    }

    const continent = data[0];

    console.log("continent: ", continent);

    return { 
      props: {
        continent
      }
    }

  } catch (error) {
    // console.log("errooooor: ", error);

    return { notFound: true };
  }
}