import { GridItem, VStack, Text } from "@chakra-ui/react";

interface InfoProps {
  count: number;
  text: string;
}

export function Info({ count, text }: InfoProps) {
  return (
    <GridItem colSpan={1}>
      <VStack justify="center" align="center">
        <Text
          fontSize={["3xl", "3xl", "5xl"]}
          fontWeight="bold"
          color="yellow.900"
        >
          {count}
        </Text>
        <Text
          mt="0"
          fontSize={["md", "lg", "xl"]}
          fontWeight="bold"
        >
          {text}
        </Text>
      </VStack>
    </GridItem>
  )
}