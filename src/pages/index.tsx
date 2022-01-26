import { SimpleGrid, Box, VStack, Image, Text } from '@chakra-ui/react'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { TravelItem } from '../components/TravelItem'


export default function Home() {
  return (
    <>
      <Header />
      <Banner />

      <Box maxWidth="1160px" mx="auto" my="5rem">
        <SimpleGrid minChildWidth='120px' spacing='40px'>
          <TravelItem label="vida noturna" img="/images/cocktail.svg" />
          <TravelItem label="praia" img="/images/surf.svg" />
          <TravelItem label="moderno" img="/images/building.svg" />
          <TravelItem label="clássico" img="/images/museum.svg" />
          <TravelItem label="e mais..." img="/images/earth.svg" />
        </SimpleGrid>
      </Box>

    </>
  )
}
