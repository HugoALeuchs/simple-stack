import styled from "styled-components";

export const UsesWrapper = styled.section`
  background-color: #37384c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5rem;
`;

export const Stack = styled.div`
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  padding: 10rem 0 16rem;
  width: 100%;
  position: sticky;
  margin-top: -10rem;
  top: 10rem;
  background-color: #37384c;
  border-radius: 5rem;
  z-index: 1;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  h2,
  p {
    text-align: start;
    font-size: 1.6rem;
    color: white;
    font-weight: 400;
    margin: 0;
    max-width: 100%;

    @media (min-width: 768px) {
      max-width: 80%;
    }

    @media (min-width: 1024px) {
      max-width: 65%;
    }

    @media (min-width: 1920px) {
      font-size: 1.8rem;
    }
  }

  h2 {
    font-size: 3rem;
    margin-bottom: 8rem;
    align-self: flex-start;
  }

  &:nth-child(2) {
    margin-top: -10rem;
    top: 5rem;
    background-color: #414256;
    z-index: 2;
  }
  &:nth-child(3) {
    margin-top: -10rem;
    top: 25rem;
    background-color: #4b4c60;
    z-index: 2;
  }
  &:nth-child(4) {
    margin-top: -25rem;
    top: 20rem;
    background-color: #55566a;
    position: relative;
    z-index: 2;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 90%;

  @media (min-width: 768px) {
    max-width: 50%;
  }
`;

export const Mask = styled.div`
  -webkit-mask-image: radial-gradient(ellipse, black 60%, transparent 40%);
  mask-image: radial-gradient(ellipse, black 60%, transparent 40%);
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 34rem;
  object-fit: cover;
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: white;
  font-weight: 300;
  margin: 0;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 7rem;
  }
`;
