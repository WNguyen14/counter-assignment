// import necessary react testing library helpers here
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// import the Counter component here
import Counter from "../components/Counter";
beforeEach(() => {
  render(<Counter></Counter>);
});

//expect a counter message
test("renders counter message", () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText(/Counter/i)).toBeInTheDocument();
});

//expect the message to be 0
test("should render initial count with value of 0", () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText(/0/i)).toBeInTheDocument();
});

//expect the text to be 1 since we only pushed the button once
test("clicking + increments the count", () => {
  // Complete the unit test below based on the objective in the line above
  const button = screen.getByText("+");
  fireEvent.click(button);
  expect(screen.getByText(/1/i)).toBeInTheDocument();
});

//expect the text to be -1 since we decremented once
test("clicking - decrements the count", () => {
  // Complete the unit test below based on the objective in the line above
  const button = screen.getByText("-");
  fireEvent.click(button);
  expect(screen.getByText(/-1/i)).toBeInTheDocument();
});
