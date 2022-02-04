import { SimpleGrid, Box, VStack, Image, Text } from '@chakra-ui/react'

interface TravelItemProps {
  img: string;
  label: string;
}

export function TravelItem({img, label}: TravelItemProps) {
  return (
    <VStack>
      <Image
        src={img}
        height={["65px", "auto"]}
      />
      <Text fontSize={["lg", "lg", "2xl"]} fontWeight={["medium", "medium", "semibold"]}>
        {label}
      </Text>
    </VStack>
  )
}