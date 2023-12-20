import styled from "styled-components";

export const SpecificationWrapper = styled.section`
  background-color: #d4d7dd;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media (min-width: 768px) {
    justify-content: center;
  }
`;

export const SpecificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-self: flex-start;
  padding: 0 2rem;

  @media (min-width: 768px) {
    padding: 0 15rem;
  }

  @media (min-width: 1024px) {
    padding: 0 25rem;
  }
`;

export const HeaderText = styled.h2`
  font-size: 2.5rem;
  color: #37384c;
  margin: 0;
`;

export const SubText = styled.p`
  font-size: 6rem;
  line-height: 1;
  color: #37384c;
  margin: 0;
  z-index: 1;

  @media (min-width: 768px) {
    font-size: 8rem;
  }

  @media (min-width: 1024px) {
    font-size: 12rem;
  }

  @media (min-width: 1920px) {
    font-size: 15rem;
  }
`;

export const SpecificationImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
  position: relative;
  top: 10rem;

  @media (min-width: 768px) {
    top: 10rem;
    width: 100%;
  }

  @media (min-width: 1024px) {
    width: 60%;
    top: -10rem;
  }
`;
