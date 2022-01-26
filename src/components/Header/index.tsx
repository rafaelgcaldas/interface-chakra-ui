import { Box, Image, Flex } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex 
        align="center" 
        justify="center" 
        height="100px"
        bg="white"
      >
        <Image src='/images/logo.svg' alt='World Trip' />
      </Flex>
  )
}