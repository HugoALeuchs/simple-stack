import {
  SpecificationWrapper,
  SpecificationContainer,
  HeaderText,
  SubText,
  SpecificationImage,
} from "./SpecificationSection.styles";

function SpecificationSection({ padding }) {
  return (
    <SpecificationWrapper style={{ padding: padding }}>
      <SpecificationContainer>
        <HeaderText>Technical specifications</HeaderText>
        <SubText>
          The quality
          <br /> comes from
          <br /> the details!
        </SubText>
      </SpecificationContainer>
      <SpecificationImage
        src="./specification-xl.webp"
        className="SpecificationImage"
        alt="Robotic Arm"
      />
    </SpecificationWrapper>
  );
}

export default SpecificationSection;
