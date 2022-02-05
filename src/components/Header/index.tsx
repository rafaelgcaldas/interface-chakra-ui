import { Box, Image, Flex, Link as ChakraLink, Icon } from '@chakra-ui/react'
import Link from 'next/link'

import { RiArrowDropLeftLine } from 'react-icons/ri'

interface HeaderProps {
  showArrowLeft?: boolean
}

export function Header({ showArrowLeft = false }: HeaderProps) {
  return (
    <Flex 
      align="center" 
      justify="center" 
      height={["50px", "100px"]}
      bg="white"
      maxWidth="1440px" 
      mx="auto"
      position="relative"
    >
      { !!showArrowLeft && (
        <Box
          position="absolute"
          left={['8px', '8px', '80px']}
        >
          <Link href="/" passHref>
            <Icon fontSize="3rem" cursor="pointer" as={RiArrowDropLeftLine} />
          </Link>
        </Box>
      )}
      <Link href="/" passHref>
        <ChakraLink>
          <Image 
            width={["81px", "185px"]}
            src='/images/logo.svg' alt='World Trip' />
        </ChakraLink>
      </Link>
    </Flex>
  )
}