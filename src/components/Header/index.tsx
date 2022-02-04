import { Box, Image, Flex, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

export function Header() {
  return (
    <Flex 
        align="center" 
        justify="center" 
        height="100px"
        bg="white"
        maxWidth="1440px" 
        mx="auto"
      >
        <Link href="/" passHref>
          <ChakraLink>
            <Image src='/images/logo.svg' alt='World Trip' />
          </ChakraLink>
        </Link>
      </Flex>
  )
}