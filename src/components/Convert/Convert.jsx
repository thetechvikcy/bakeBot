import React, { useState } from "react";
import {
  ConverterContainer,
  ConverterTitle,
  ConverterForm,
  Label,
  Select,
  Input,
  Output,
} from "./style";

const conversionRates = {
  "Grams to Cups": 0.0042, // 1 gram = 0.0042 cups (approx for flour/sugar)
  "Cups to Grams": 240, // 1 cup = 240 grams (approx)
  "Tablespoons to Milliliters": 15,
  "Milliliters to Tablespoons": 1 / 15,
  "Teaspoons to Milliliters": 5,
  "Milliliters to Teaspoons": 1 / 5,
  "Ounces to Grams": 28.35,
  "Grams to Ounces": 1 / 28.35,
};

const unitOptions = Object.keys(conversionRates);

const Convert = () => {
  const [selectedConversion, setSelectedConversion] = useState(unitOptions[0]);
  const [inputValue, setInputValue] = useState("");
  const [convertedValue, setConvertedValue] = useState("");

  const handleConvert = (e) => {
    e.preventDefault();
    const rate = conversionRates[selectedConversion];
    const result = parseFloat(inputValue) * rate;
    setConvertedValue(result.toFixed(2));
  };

  return (
    <ConverterContainer>
      <ConverterTitle>Cooking Unit Converter</ConverterTitle>
      <ConverterForm onSubmit={handleConvert}>
        <Label>Select Conversion</Label>
        <Select
          value={selectedConversion}
          onChange={(e) => setSelectedConversion(e.target.value)}
        >
          {unitOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </Select>

        <Label>Enter Value</Label>
        <Input
          type="number"
          placeholder="Enter value to convert"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />

        <Input type="submit" value="Convert" />

        {convertedValue && (
          <Output>
            Converted Value: <strong>{convertedValue}</strong>
          </Output>
        )}
      </ConverterForm>
    </ConverterContainer>
  );
};

export default Convert;
