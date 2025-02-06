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

export const FrontendProjects = () => {
  return (
    <Grid columns="2" gap="6" gapY="8" rows="repeat(4, 240px)">
      <Flex direction="column">
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
          challenge, its a platfrom that provides Figma designs for frontend
          developer to practice real life work flows. This is built with React
          and is fully responsive for various screen sizes
        </Text>
      </Flex>
      <AspectRatio ratio={16 / 8}>
        <img
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
      <AspectRatio ratio={16 / 8}>
        <img
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
      <Flex direction="column">
        <Flex align="center">
          <Text size="6">Dine</Text>
          <Link
            href="https://oscvrhrr.github.io/dine-restaurant/"
            target="_blank"
          >
            <ExternalLinkIcon className="ml-2" />
          </Link>
          <Link
            href="https://github.com/oscvrhrr/dine-restaurant"
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
        <img
          src="https://fzyxhpuljtyplklakuoy.supabase.co/storage/v1/object/sign/misc/dine.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtaXNjL2RpbmUuanBlZyIsImlhdCI6MTczODg3NjMyNCwiZXhwIjoxNzcwNDEyMzI0fQ.0qiHCUTZEQlP4fbzZzmPljzcnqCwpdeCUOtbYzPn8VQ"
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
