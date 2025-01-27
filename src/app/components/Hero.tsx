import { Heading, Container, Flex, Box, Text } from "@radix-ui/themes";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <Container size="3" pt="9">
      <Flex justify="between" align="center" className="">
        <Flex direction="column" maxWidth="470px">
          <Flex direction="column" gap="2">
            <RoughNotationGroup show={true}>
              <Heading wrap="balance" size="8" as="h1">
                Hello there! I am Oscar a <RoughNotation type="highlight" color="#00749E">
                developer
                </RoughNotation> based in Chicago
              </Heading>
              <Text>
                I love creating user interfaces that make you smile :)
              </Text>
              <Text wrap="balance" size="3">
                I learned web development through <RoughNotation type="circle" color="#FFDC00"><Link target="_blank" href="https://www.theodinproject.com">The Odin Project,</Link></RoughNotation>which is an{" "}
                <RoughNotation type="highlight" color="#CC4E00">open-source curriculum</RoughNotation> focused on full-stack development.
                Throughout my journey I learned to work with <RoughNotation type="highlight" color="#00749E">modern JavaScript
                technologies.</RoughNotation> I then discovered my love for creating intuitive
                and <RoughNotation type="highlight" color="#CC4E00">user-centered</RoughNotation> web applications.
              </Text>
            </RoughNotationGroup>
            <Text color="gray" wrap="pretty" size="3"></Text>
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
