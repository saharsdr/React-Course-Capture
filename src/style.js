
import styled from "styled-components";

export const About = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

export const Image = styled.div`
  flex: 1;
    overflow: hidden;
    img {
      width: 100%;
      height: 80vh;
      object-fit: cover;
    }
`;

export const Description = styled.div`
  padding-right: 6rem;
    flex: 1;
    h2 {
      font-weight: lighter;
    }
`;

export const Hide = styled.div`
  overflow:hidden;
`;

export const Button = styled.button`
  font-weight: bold;
  font-size: 1.3rem;
  cursor: pointer;
  padding: 1rem 2rem;
  transition: all 0.5s ease;

  border: 3px solid #23d997;
  background: transparent;
  color: white;

  &:hover {
    background: #23d997;
    color: white;
  }
`;
