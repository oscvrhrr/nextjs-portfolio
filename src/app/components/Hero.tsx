import { Heading, Container, Flex, Box, Text } from "@radix-ui/themes";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";


export default function Hero() {
  return (
    <Container
      size="3"
      pt="9"
    >
      <Flex justify="between" align="center" className="">
        <Flex direction="column" maxWidth="470px">
          <Flex direction="column" gap="2">
          <Heading wrap="balance" size="8" as="h1">
            Hello there! I am Oscar a developer based in
            Chicago
          </Heading>
            <Text color="gray" wrap="balance" size="3">
              I love crafting pleasant user interfaces that makes you smile :)
            </Text>
            <Text color="gray" wrap="pretty" size="3">
              Im a Bay Area native, I fortunatley crossed paths with technology, and instantly fell in love. These Projects serve as a reflection of my learning journey, and each are a stepping stone to my next learning venture.
            </Text>
            <Flex py="2">
              <Link target="_blank" href={"https://github.com/oscvrhrr"}>
                <GitHubLogoIcon className="mr-2" />
              </Link>
              <LinkedInLogoIcon />
            </Flex>
          </Flex>
        </Flex>
        <Flex maxWidth="220px" direction="column">
          <Image
          alt="mono"
          src={"/assets/mono.jpg"}
          width={300}
          height={300}
          className="rounded-lg"
          />
        </Flex>
      </Flex>
    </Container>
  );
}
