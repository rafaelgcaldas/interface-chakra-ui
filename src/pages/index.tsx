import { Box, Divider, Heading, Image } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { TravelTypes } from '../components/TravelTypes'

import { Carousel } from '../components/Carousel';
import { GetServerSideProps } from 'next';
import { api } from '../services/api';
import Continent from './continents/[slug]';


interface Continent {
  id: number;
  name: string;
  title: string;
  image: string;
  slug: string;
}

interface HomeProps {
  continents: Continent[]
}

export default function Home({ continents }: HomeProps) {
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

      <Box maxWidth="1160px" mx="auto" mb="16">
        <Carousel continents={continents} />
      </Box>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await api.get(`continents`);

  const continents = response.data.map(continent => {
    return {
      id: continent.id,
      name: continent.name,
      title: continent.title,
      image: continent.image,
      slug: continent.slug
    }
  })

  console.log("continents: ", continents);

  return {
    props: {
      continents
    }
  }
}
