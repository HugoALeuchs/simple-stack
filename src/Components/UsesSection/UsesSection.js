import React from "react";
import {
  UsesWrapper,
  Stack,
  Card,
  Content,
  Image,
  Title,
  Mask,
} from "./UsesSection.styles";

const image1 = "./use-1-xl.webp";
const image2 = "./use-2-xl.webp";
const image3 = "./use-3-xl.webp";

function UsesSection() {
  return (
    <UsesWrapper>
      <Stack>
        <Card>
          <Title>
            One Clingr,
            <br /> many options
          </Title>
        </Card>
        <Card>
          <Mask style={{ transform: "rotate(-20deg)" }}>
            <Image
              src={image1}
              alt="Clingr"
              style={{ transform: "rotate(20deg)" }}
            />
          </Mask>
          <Content>
            <h2>Dries pets easily and quickly</h2>
            <p>
              Pets never sit still, especially when it comes to drying their
              coats. How can you hold a hair dryer in one hand, hold your pet
              and comb in other at the same time? Clingr solves these problems
              by freeing up your hands. Now you can give enough attention to
              your pet by holding it with one hand and combing it out with
              other.
            </p>
          </Content>
        </Card>
        <Card>
          <Mask style={{ transform: "rotate(0deg)" }}>
            <Image src={image2} alt="Clingr" />
          </Mask>
          <Content>
            <h2>Save time and effort getting children ready</h2>
            <p>
              With a Clingr you can get your child ready for school, or tidy
              them up after sports, in record time. You'll be ready to go out
              again in minutes: dry and style your child's hair nicely and
              easily.
            </p>
          </Content>
        </Card>
        <Card>
          <Mask style={{ transform: "rotate(20deg)" }}>
            <Image
              src={image3}
              alt="Clingr"
              style={{ transform: "rotate(-20deg)" }}
            />
          </Mask>
          <Content>
            <h2>Style your hair with one hand</h2>
            <p>
              Clingr is perfect for those who, by some reason, can only use one
              hand. With this handy hairdryer holder, they can dry and brush
              their hair at the same time, saving time and giving them the
              opportunity to look well groomed every day.
            </p>
          </Content>
        </Card>
      </Stack>
    </UsesWrapper>
  );
}

export default UsesSection;
