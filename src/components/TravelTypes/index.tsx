import { SimpleGrid, Box } from '@chakra-ui/react'
import { TravelItem } from '../TravelItem'

export function TravelTypes() {
  return (
    <Box maxWidth="1160px" mx="auto" my={["2rem", "5rem"]}>
      <SimpleGrid minChildWidth='120px' spacing='40px' m="2">
        <TravelItem label="vida noturna" img="/images/cocktail.svg" />
        <TravelItem label="praia" img="/images/surf.svg" />
        <TravelItem label="moderno" img="/images/building.svg" />
        <TravelItem label="clássico" img="/images/museum.svg" />
        <TravelItem label="e mais..." img="/images/earth.svg" />
      </SimpleGrid>
    </Box>
  )
}