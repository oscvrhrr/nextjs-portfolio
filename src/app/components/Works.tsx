/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Container,
  Heading,
  AspectRatio,
  Flex,
  Text,
  Grid,
  Theme,
} from "@radix-ui/themes";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import ToggleProjects from "./ToggleProjects";
import { FrontendProjects } from "./FrontendProjects";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const Works = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [imgOneLoaded, setImgOneLoaded] = useState(false);
  const [imgTwoLoaded, setImgTwoLoaded] = useState(false);
  const [imgThreeLoaded, setImgThreeLoaded] = useState(false);

  return (
    <Container
      size={{ initial: "1", md: "3" }}
      className="h-full"
      py="9"
      mx={{ initial: "5" }}
    >
      <Flex direction="column" gap="5">
        <Heading size="7">Projects</Heading>
        <ToggleProjects setIsToggled={setIsToggled} />
        <Text>Some of my latest projects</Text>
        {isToggled ? (
          <FrontendProjects />
        ) : (
          <Grid
            columns={{ initial: "1", md: "2" }}
            gap="6"
            gapY="8"
            rows="repeat(4, 240px)"
          >
            <AspectRatio ratio={16 / 8}>
              {!imgOneLoaded && (
                <Skeleton className="w-full h-full"/>
              )}
              <Image
                fill
                quality={100}
                src="https://fzyxhpuljtyplklakuoy.supabase.co/storage/v1/object/sign/misc/mydrive%20(1).gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtaXNjL215ZHJpdmUgKDEpLmdpZiIsImlhdCI6MTczODg5MDA4NiwiZXhwIjoxNzcwNDI2MDg2fQ.mcGxW6t8pSanMaHiLyWSq1RV7o-SLbPuuqN40SdHVws"
                alt="A house in a forest"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "var(--radius-2)",
                  boxShadow: "var(--shadow-1)",
                }}
                onLoad={() => setImgOneLoaded(true)}
              />
            </AspectRatio>
            <Flex direction="column">
              <Flex align="center">
                <Text size="6">MyDrive</Text>
                <Link
                  href="https://file-uploader-beige.vercel.app/"
                  target="_blank"
                >
                  <ExternalLinkIcon className="ml-2" />
                </Link>
                <Link
                  href="https://github.com/oscvrhrr/file-uploader"
                  target="_blank"
                >
                  <GitHubLogoIcon className="ml-2" />
                </Link>
              </Flex>
              <Text size="3">
                MyDrive is a File storage system its a stripped down version of
                google drive. Feel free use the demo account yourself
              </Text>
            </Flex>
            <Flex direction="column">
              <Flex align="center">
                <Text size="6">BlogApi</Text>
                <Link
                  href="https://blog-api-six-orpin.vercel.app/"
                  target="_blank"
                >
                  <ExternalLinkIcon className="ml-2" />
                </Link>
                <Link
                  href="https://github.com/oscvrhrr/blog-api"
                  target="_blank"
                >
                  <GitHubLogoIcon className="ml-2" />
                </Link>
              </Flex>
              <Text size="3">
                This is a blog app, I integrated tinyMCE text editor to enable
                rich content creation. I loved working prismjs, which allows
                code snippets to be highlighted
              </Text>
            </Flex>
            <AspectRatio ratio={16 / 8}>
            {!imgTwoLoaded && (
                <Skeleton className="w-full h-full"/>
              )}
              <Image
                fill
                quality={100}
                src="http://fzyxhpuljtyplklakuoy.supabase.co/storage/v1/object/sign/misc/blogapi-ezgif.com-optimize.gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtaXNjL2Jsb2dhcGktZXpnaWYuY29tLW9wdGltaXplLmdpZiIsImlhdCI6MTczNzU2NDA5MSwiZXhwIjoxNzY5MTAwMDkxfQ.sbuV1k33n6evFBnJ52lFQb853G_4-AimjFsYy60egL0&t=2025-01-22T16%3A41%3A31.937Z"
                alt="A house in a forest"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "var(--radius-2)",
                  boxShadow: "var(--shadow-1)",
                }}
                onLoad={() => setImgTwoLoaded(true)}
              />
            </AspectRatio>
            <AspectRatio ratio={16 / 8}>
            {!imgTwoLoaded && (
                <Skeleton className="w-full h-full"/>
              )}
              <Image
                fill
                unoptimized
                quality={100}
                src="https://fzyxhpuljtyplklakuoy.supabase.co/storage/v1/object/public/Files_fileupload/user-uploads/demo/chat-app.gif"
                alt="A house in a forest"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "var(--radius-2)",
                  boxShadow: "var(--shadow-1)",
                }}
                onLoad={() => setImgThreeLoaded(true)}
              />
            </AspectRatio>
            <Flex direction="column">
              <Flex align="center">
                <Text size="6">Chat App RTC</Text>
                <Link
                  href="https://chat-app-ruddy-eight.vercel.app/"
                  target="_blank"
                >
                  <ExternalLinkIcon className="ml-2" />
                </Link>
                <Link
                  href="https://github.com/oscvrhrr/chat-app"
                  target="_blank"
                >
                  <GitHubLogoIcon className="ml-2" />
                </Link>
              </Flex>
              <Text size="3">
                This is a TypeScript based real-time chat app. Users can chat
                with each other and see their online status. I wrote the
                front-end and back-end in TypeScript
              </Text>
            </Flex>
          </Grid>
        )}
      </Flex>
    </Container>
  );
};

export default Works;
