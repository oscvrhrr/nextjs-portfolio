import React from "react";
import { Container, Heading, AspectRatio, Flex, Text, Grid } from "@radix-ui/themes";

const Works = () => {
  return (
    <Container size="3" className="h-full" pt="9">
      <Flex direction="column" gap="5">
        <Heading size="7">Projects</Heading>
        <Text>Some of my latest projects</Text>
        <Grid columns="2" gap="5" rows="repeat(2, 240px)">
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
          <AspectRatio ratio={16 / 8} className="">
            <img
              src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
              alt="A house in a forest"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "var(--radius-2)",
              }}
            />
          </AspectRatio>
        </Grid>
      </Flex>
    </Container>
  );
};

export default Works;
