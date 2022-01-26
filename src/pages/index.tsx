import { Box, Divider, Heading } from '@chakra-ui/react'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { TravelTypes } from '../components/TravelTypes'


export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />

      <Box maxWidth="1160px" mx="auto" textAlign="center">
        <Divider 
          borderColor="gray.400" 
          width="90px"
          mb="3.25rem" 
          mx="auto"
        />

        <Box mb="4">
          <Heading fontWeight="medium">Vamos nessa?</Heading>
          <Heading fontWeight="medium">Então escolha seu continente</Heading>
        </Box>
      </Box>
    </>
  )
}
