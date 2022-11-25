import React from "react";
import ReactDOM from "react-dom";
import {
  render,
  screen,
  cleanup,
  getByDisplayValue,
  getByAltText,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Pizza from "../../pages/Pizzas";

import { MemoryRouter } from "react-router";

let expectedProps;

beforeEach(() => {
  expectedProps = {
    description: "",
    id: 1,
    name: "Tonno",
    ingredients: "Tonno, garlic",
    price: 10,
  };
});

afterEach(() => {
  cleanup();
});

it("renders pizza page without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Pizza />, div);
  });
  
test("should render pizza", () => {
    render(<Pizza/>);
    const pizza = screen.getByTestId('pizza');
    expect(pizza).toBeInTheDocument("Add new pizza");

});