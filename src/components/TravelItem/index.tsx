import { SimpleGrid, Box, VStack, Image, Text } from '@chakra-ui/react'

interface TravelItemProps {
  img: string;
  label: string;
}

export function TravelItem({img, label}: TravelItemProps) {
  return (
    <VStack>
      <Image src={img} />
      <Text fontSize="2xl" fontWeight="semibold">
        {label}
      </Text>
    </VStack>
  )
}