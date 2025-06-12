import React from "react";
import { Container } from "./style";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Dinner from "./Dinner";

export default function Home() {
  return (
    <Container>
      <Breakfast />
      <Lunch />
      <Dinner />
    </Container>
  );
}
