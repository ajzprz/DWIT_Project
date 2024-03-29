
import {
  Box,
  Container,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";


const Footer = () => {
  return (
    <Box 
      bgGradient="linear(to-r, #013b7e, blue.600, #1758a2) "
      color={useColorModeValue("gray.700", "gray.200")}
      position='relative'
      zIndex='10'
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Image m={'auto'}
                h={100}
                w={100}
                src="https://thetravelhub.com/img/tth-logo-small.png"
                alt="Logo"
              />
            </Box>
            <Text textAlign='center' fontSize={"sm"}>
              © 2022 THE TRAVEL HUB. All rights reserved
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontSize={"2xl"} fontWeight={"bold"}>Products</Text>
            <Link href={"#"}>Overview</Link>
            <Link href={"#"}>Features</Link>
            <Link href={"#"}>Tutorials</Link>
            <Link href={"#"}>Pricing</Link>
            <Link href={"#"}>Releases</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontSize={"2xl"} fontWeight={"bold"}>Company</Text>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Press</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Contact</Link>
            <Link href={"#"}>Partners</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontSize={"2xl"} fontWeight={"bold"}>Support</Text>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Legal</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Status</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontSize={"2xl"} fontWeight={"bold"}>Follow Us</Text>
            <Link href={"#"}>Facebook</Link>
            <Link href={"#"}>Twitter</Link>
            <Link href={"#"}>Dribbble</Link>
            <Link href={"#"}>Instagram</Link>
            <Link href={"#"}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
