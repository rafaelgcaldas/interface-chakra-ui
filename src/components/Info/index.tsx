import { GridItem, VStack, Text, Flex, Box, Icon } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

interface InfoProps {
  count: number;
  text: string;
  hasIcon?: boolean;
}

export function Info({ count, text, hasIcon = false }: InfoProps) {
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
          <Flex align="center">
            <Box>{text}</Box>
            {!!hasIcon && <Icon fontSize="md" ml="4px" as={RiInformationLine} />}
          </Flex>
        </Text>
      </VStack>
    </GridItem>
  )
}