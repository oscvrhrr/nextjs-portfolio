/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Container, Heading, AspectRatio, Flex, Text, Grid } from "@radix-ui/themes";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

const Works = () => {
  return (
    <Container size="3" className="h-full" py="9">
      <Flex direction="column" gap="5">
        <Heading size="7">Projects</Heading>
        <Text>Some of my latest projects</Text>
        <Grid columns="2" gap="6" gapY="8" rows="repeat(2, 240px)">
          <AspectRatio ratio={16 / 8} >
            <img
              src="https://fzyxhpuljtyplklakuoy.supabase.co/storage/v1/object/sign/misc/mydrive.gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtaXNjL215ZHJpdmUuZ2lmIiwiaWF0IjoxNzM0NzIxNTMxLCJleHAiOjE3NjYyNTc1MzF9.5I59XBDsaJlbBevBsl499wdIzf2VPTyTsoV1s_sYwmI&t=2024-12-20T19%3A05%3A31.674Z"
              alt="A house in a forest"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "var(--radius-2)",
                boxShadow: "var(--shadow-1)"
              }}
            />
          </AspectRatio>
          <Flex direction="column">
            <Flex align="center">
              <Text size="6">
                  MyDrive
              </Text>
              <Link href="https://file-uploader-beige.vercel.app/" target="_blank">
                <ExternalLinkIcon className="ml-2"/>
              </Link>
              <Link href="https://github.com/oscvrhrr/file-uploader" target="_blank">
                <GitHubLogoIcon className="ml-2"/>
              </Link>
            </Flex>
            <Text size="3">
                MyDrive is a File storage system its a stripped down version of google drive. Feel free use the demo account yourself
            </Text>
          </Flex>
          <AspectRatio ratio={16 / 8} >
         
            <img
              src="https://fzyxhpuljtyplklakuoy.supabase.co/storage/v1/object/sign/misc/blogapi-ezgif.com-optimize.gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtaXNjL2Jsb2dhcGktZXpnaWYuY29tLW9wdGltaXplLmdpZiIsImlhdCI6MTczNzU2NDA5MSwiZXhwIjoxNzY5MTAwMDkxfQ.sbuV1k33n6evFBnJ52lFQb853G_4-AimjFsYy60egL0&t=2025-01-22T16%3A41%3A31.937Z"
              alt="A house in a forest"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "var(--radius-2)",
                boxShadow: "var(--shadow-1)"
              }}
              
              />
              
          </AspectRatio>
          <Flex direction="column">
            <Flex align="center">
              <Text size="6">
                  BlogApi
              </Text>
              <Link href="https://blog-api-six-orpin.vercel.app/" target="_blank">
                <ExternalLinkIcon className="ml-2"/>
              </Link>
              <Link href="https://github.com/oscvrhrr/blog-api" target="_blank">
                <GitHubLogoIcon className="ml-2"/>
              </Link>
            </Flex>
            <Text size="3">
                This is a blog app, I integrated tinyMCE text editor to enable rich content creation. I loved working prismjs, which allows code snippets to be highlighted
            </Text>
          </Flex>
         
          
        </Grid>
      </Flex>
    </Container>
  );
};

export default Works;
