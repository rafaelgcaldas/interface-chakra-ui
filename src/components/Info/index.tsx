import { GridItem, VStack, Text } from "@chakra-ui/react";

interface InfoProps {
  count: number;
  text: string;
}

export function Info({ count, text }: InfoProps) {
  return (
    <GridItem colSpan={1}>
      <VStack>
        <Text>{count}</Text>
        <Text>{text}</Text>
      </VStack>
    </GridItem>
  )
}