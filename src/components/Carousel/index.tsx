import { Flex, Heading, VStack, Link as LinkChakra } from "@chakra-ui/react";

import Link from "next/link";

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Autoplay, Navigation, Pagination]);


interface Continent {
  id: number;
  name: string;
  title: string;
  image: string;
  slug: string;
}

interface CarouselProps {
  continents: Continent[];
}

export function Carousel({ continents }: CarouselProps) {
  
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
              <Link href={`/continents/${continent.slug}`}>
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
                    {continent.title}
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

