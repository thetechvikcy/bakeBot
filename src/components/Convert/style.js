import styled from "styled-components";

export const ConverterContainer = styled.div`
  max-width: 500px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: #f4f8fb;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 130px;
`;

export const ConverterTitle = styled.h2`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
`;

export const ConverterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Label = styled.label`
  font-weight: 600;
  color: #34495e;
`;

export const Select = styled.select`
  padding: 0.6rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const Input = styled.input`
  padding: 0.6rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;

  &[type="submit"] {
    background-color: #0077cc;
    color: white;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      background-color: #005fa3;
    }
  }
`;

export const Output = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #2d3436;
  text-align: center;
`;
