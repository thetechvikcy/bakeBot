import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  width: 100vw;
  z-index: 999;

  .brand {
    font-size: 1.8rem;
    color: #00b894;
    font-weight: 700;
    margin: 0;
    font-family: "Poppins", sans-serif;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: 768px) {
      display: none;
    }

    a {
      text-decoration: none;
      color: #1e293b;
      font-weight: 500;
      font-size: 1rem;
      transition: color 0.3s ease;

      &:hover {
        color: #00b894;
      }
    }
  }

  .button {
    background-color: #00b894;
    color: white;
    padding: 0.6rem 1.4rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-decoration: none;

    &:hover {
      background-color: #00997c;
    }
  }
`;
