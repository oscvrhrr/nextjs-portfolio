/* eslint-disable @next/next/no-img-element */
import {
  Container,
  Heading,
  AspectRatio,
  Flex,
  Text,
  Grid,
} from "@radix-ui/themes";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

import Link from "next/link";
import Image from "next/image";

export const FrontendProjects = () => {
  return (
    <Grid columns={{ initial: "1", md: "2"}} gap="6" gapY="8" rows="repeat(4, 240px)">
      {/* Pawmates */}
      <Flex direction="column">
        <Flex align="center">
          <Text size="6">Pawmates</Text>
          <Link
            href="https://pawmates-two.vercel.app/"
            target="_blank"
          >
            <ExternalLinkIcon className="ml-2" />
          </Link>
          <Link
            href="https://github.com/oscvrhrr/pawmates"
            target="_blank"
          >
            <GitHubLogoIcon className="ml-2" />
          </Link>
        </Flex>
        <Text size="3">
         Pawmates is a take home assignment from Fetch Rewards. This project is a React app that is configured with a Rest api and is written in TypeScript.
         Try the app by entering any credentials in the format shown in the inputs!
        </Text>
      </Flex>
      <AspectRatio ratio={16 / 8}>
        <Image
          fill
          quality={100}
          src="https://fzyxhpuljtyplklakuoy.supabase.co/storage/v1/object/sign/misc/pawmates.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81NGU5MjA3MS03ZTBkLTQ0NzUtOGYzMS0wYzE2NzMwOTM3NmEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtaXNjL3Bhd21hdGVzLmpwZWciLCJpYXQiOjE3NTEyOTYxMTcsImV4cCI6MTc4MjgzMjExN30.W4J_Rl7Bmxvuj36AG1gZSSFy8ZMYEGptyX7wucLmjz4"
          alt="A house in a forest"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: "var(--radius-2)",
            boxShadow: "var(--shadow-1)",
          }}
        />
      </AspectRatio>
      {/* Audiophile */}
       <AspectRatio ratio={16 / 8} style={{ gridColumn: 2 }}>
        <Image
          fill
          quality={100}
          src="https://fzyxhpuljtyplklakuoy.supabase.co/storage/v1/object/sign/misc/audiophile-desktop.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtaXNjL2F1ZGlvcGhpbGUtZGVza3RvcC5qcGciLCJpYXQiOjE3Mzc5ODgyNzgsImV4cCI6MTc2OTUyNDI3OH0.7nQLiTCZ2sPH0aLxyYjjVGN4mQPkVlgbn6cmTaAcQ4M"
          alt="A house in a forest"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: "var(--radius-2)",
            boxShadow: "var(--shadow-1)",
          }}
        />
      </AspectRatio>
      <Flex direction="column" style={{ gridAutoColumns: 1 }}>
        <Flex align="center">
          <Text size="6">Audiophile</Text>
          <Link
            href="https://ecommerce-react-audiophile.netlify.app/"
            target="_blank"
          >
            <ExternalLinkIcon className="ml-2" />
          </Link>
          <Link
            href="https://github.com/oscvrhrr/ecommerce-store"
            target="_blank"
          >
            <GitHubLogoIcon className="ml-2" />
          </Link>
        </Flex>
        <Text size="3">
          Audiophile is a{" "}
          <Link
            className="underline"
            target="_blank"
            href="https://www.frontendmentor.io/"
          >
            Frontend Mentor
          </Link>{" "}
          challenge, Frontend mentor is a platform that provides figma designs
          to practice real life workflows, translating designs into responsive UIs
        </Text>
      </Flex>
      {/* photosnap */}
      <Flex direction="column">
        <Flex align="center">
          <Text size="6">Photosnap</Text>
          <Link
            href="https://oscvrhrr.github.io/photosnap-multi-pg-website/"
            target="_blank"
          >
            <ExternalLinkIcon className="ml-2" />
          </Link>
          <Link
            href="https://github.com/oscvrhrr/photosnap-multi-pg-website"
            target="_blank"
          >
            <GitHubLogoIcon className="ml-2" />
          </Link>
        </Flex>
        <Text size="3">
          This live demo is another{" "}
          <Link
            target="_blank"
            className="underline"
            href={"https://www.frontendmentor.io/"}
          >
            Frontend Mentor
          </Link>{" "}
          design I built this with html, css, and javascript. I styled this with
          vanilla css, and can confidenlty use any css framework to build user
          interfaces. Check out the live site on any screen size
        </Text>
      </Flex>
      <AspectRatio ratio={16 / 8}>
        <Image
          fill
          quality={100}
          src="https://fzyxhpuljtyplklakuoy.supabase.co/storage/v1/object/sign/misc/photosnap.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtaXNjL3Bob3Rvc25hcC5qcGVnIiwiaWF0IjoxNzM4MDAyNTU4LCJleHAiOjE3Njk1Mzg1NTh9.VqTPHUMxgUo1ItRJADjrlxxB5WBjrACYaY1YH5Blh2A"
          alt="A house in a forest"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: "var(--radius-2)",
            boxShadow: "var(--shadow-1)",
          }}
        />
      </AspectRatio>
    </Grid>
  );
};
