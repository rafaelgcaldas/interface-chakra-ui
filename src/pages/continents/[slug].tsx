import { Box, Flex, Grid, GridItem, Heading, HStack, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Header } from "../../components/Header";
import { Info } from "../../components/Info";
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
  countryFlag: string;
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
        maxWidth="1440px"
        mx="auto"
      >
        <Box
          maxWidth="1160px"
          height="100%"
          mx="auto"
          display="flex"
          alignItems={["center", "flex-end", "flex-end"]}
          justifyContent={["center", "inherit", "inherit"]}
          >
          <Heading 
            fontSize="3rem"
            color="white"
            ml="4"
            pb="3rem"
          >
            {continent.name}
          </Heading>
        </Box>
      </Box>

      <Box maxWidth="1160px" mx="auto">
        <Grid 
          templateColumns={['repeat(1fr)', 'repeat(1fr)', 'repeat(2, 1fr)']} 
          my="5rem"
        >
          <GridItem colSpan={1}>
            <Text textAlign="justify" p="4">
              {continent.content}
            </Text>
          </GridItem>
          <GridItem >
            <Grid 
              templateColumns='repeat(3, 1fr)' 
              gap="1.5rem" 
              colSpan={1} 
              mx={["1rem", "2rem", "2rem"]}
            >
              <Info count={continent.countries} text="países" />
              <Info count={continent.languages} text="línguas" />
              <Info count={continent.cities.length} text="cidades +100" />
            </Grid>
          </GridItem>
        </Grid>

        <Box>
          <Heading 
            mx="4" 
            mb="2.5rem" 
            fontWeight="medium"
          >
            Cidades +100
          </Heading>

          <SimpleGrid 
            minChildWidth='250px' 
            spacing='40px' 
            align='center' 
            px="4"
          >
            {continent.cities.map(city => (
              <Box 
                maxWidth={["100%", "100%","250px"]} 
                borderRadius='4px' 
                overflow='hidden'
                bg="white"
                mb="3rem"
                key={city.id}
              >
                <Image 
                  src={city.image} 
                  alt={city.name} 
                  width="100%" 
                  height="173px" 
                  objectFit="cover" 
                />
                <Box 
                  p="6" 
                  borderWidth='1px' 
                  borderTop="0"
                  borderColor="yellow.900"
                  height="107px"
                >
                  <Box textAlign="left">
                    <Heading 
                      fontSize='lg' 
                      mb="0.75rem" 
                      fontWeight="semibold"
                    >
                      {city.name}
                    </Heading>

                    <HStack justify="space-between">
                      <Text>{city.country}</Text>
                      <Image 
                        src={city.countryFlag} 
                        alt={city.name} 
                        width="30px" 
                        height="30px" 
                        borderRadius="50%"
                      />
                    </HStack>
                  </Box>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
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