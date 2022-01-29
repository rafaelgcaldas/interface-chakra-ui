import { Flex, Heading, VStack, Link as LinkChakra } from "@chakra-ui/react";

import Link from "next/link";

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Autoplay, Navigation, Pagination]);


export function Carousel() {
  const continents = [
    {
      id: 1,
      image: '/images/background.png',
      name: 'Europe',
      description: 'O continente mais antigo',
      url: 'europe'
    },
    {
      id: 2,
      image: '/images/background.png',
      name: 'Americano',
      description: 'Teste',
      url: 'american'
    },
  ]
  return (
    <Flex
      maxW="1240px"
      width="100%"
      h={["250px", "250px", "450px"]}
      mx="auto"
      mt={[5, 5, 14]}
    >
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
        loop
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.id} >
            <VStack
              alignItems="center"
              justify="center"
              h="100%"
              w="100%"
              bgImage={continent.image}
              bgSize="cover"
            >
              <Link href={`/continents/${continent.url}`}>
                <LinkChakra textAlign="center">
                  <Heading
                    fontWeight="bold"
                    fontSize={["2xl", "2xl", "5xl"]}
                    color="blue.100"
                  >
                    {continent.name}
                  </Heading>
                  <Heading
                    fontWeight="bold"
                    fontSize={["sm", "sm", "2xl"]}
                    color="gray.200"
                    mt="4"
                  >
                    {continent.description}
                  </Heading>
                </LinkChakra>
              </Link>
            </VStack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}

