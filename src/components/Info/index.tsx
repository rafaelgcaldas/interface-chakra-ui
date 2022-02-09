import { 
  GridItem,
  VStack,
  Text,
  Flex,
  Box,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Link,
} from "@chakra-ui/react";
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
        <Box
          mt="0"
          fontSize={["md", "lg", "xl"]}
          fontWeight="bold"
        >
          <Flex align="center">
            <Box>{text}</Box>
            {!!hasIcon && (
              <Popover placement='left'>
                <PopoverTrigger>
                  <Box cursor="pointer">
                    <Icon fontSize="md" ml="4px" as={RiInformationLine} />
                  </Box>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Cidades +100</PopoverHeader>
                  <PopoverBody>
                    <Text fontSize="sm" fontWeight="medium">
                      Cidades +100 é o número de cidades do continente que estão entre as 100 cidades mais visitadas do mundo.
                    </Text> 
                    <Link 
                      href='https://www.visualcapitalist.com/the-100-most-popular-city-destinations/'
                      isExternal
                      color="blue.500"
                    >
                      Saiba mais
                    </Link>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            )}
          </Flex>
        </Box>
      </VStack>
    </GridItem>
  )
}

/**
 * 
 */