import styled from "styled-components";

export const Container = styled.footer`
  background-color: #f5f5f5;
  padding: 2.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #1e293b;
  flex-wrap: wrap;

  .logo-content {
    display: flex;
    align-items: center;
    gap: 8px;

    .logo-name {
      font-family: "Poppins", sans-serif;
      font-size: 1.5rem;
      font-weight: 600;
      background: linear-gradient(90deg, #00d2ff, #3a47d5);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .footer-text {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;

    img {
      width: 24px;
      animation: spin 4s linear infinite;
    }
  }

  .social-media {
    display: flex;
    gap: 1rem;

    a {
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }

      img {
        width: 30px;
        height: 30px;
        filter: grayscale(100%);
        transition: filter 0.3s ease;

        &:hover {
          filter: grayscale(0%);
        }
      }
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
`;
